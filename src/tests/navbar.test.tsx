import { describe, test, expect } from "vitest";
import React from "react";
import { renderToString } from "react-dom/server";
import Navbar from "../components/layout/Navbar";

describe("Navbar Accessibility", () => {
  test("renders icon buttons with proper ARIA attributes", () => {
    const html = renderToString(<Navbar />);
    document.body.innerHTML = html;

    const shoppingBagButtons = document.querySelectorAll('button[aria-label="View shopping bag"]');
    expect(shoppingBagButtons.length).toBeGreaterThan(0);

    const menuToggleButton = document.querySelector('button[aria-label="Open navigation menu"]');
    expect(menuToggleButton).not.toBeNull();
    expect(menuToggleButton?.getAttribute("aria-expanded")).toBe("false");
  });
});
