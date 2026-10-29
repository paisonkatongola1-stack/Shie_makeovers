import { describe, test, expect, beforeEach, afterEach } from "vitest";
import React, { act } from "react";
import { createRoot, Root } from "react-dom/client";
import Navbar from "@/components/layout/Navbar";

// Set global flag for React 19 act environment
(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

describe("Navbar Component Accessibility", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    container.remove();
  });

  test("renders shopping bag buttons with aria-label", () => {
    act(() => {
      root.render(<Navbar />);
    });
    const shoppingButtons = container.querySelectorAll('button[aria-label="Shopping bag"]');
    expect(shoppingButtons.length).toBe(2);
  });

  test("renders mobile menu button with initial aria-label and aria-expanded", () => {
    act(() => {
      root.render(<Navbar />);
    });
    const menuButton = container.querySelector('button[aria-label="Open main menu"]');
    expect(menuButton).not.toBeNull();
    expect(menuButton?.getAttribute("aria-expanded")).toBe("false");
  });

  test("toggles aria-label and aria-expanded on mobile menu button click", () => {
    act(() => {
      root.render(<Navbar />);
    });
    const menuButton = container.querySelector('button[aria-label="Open main menu"]') as HTMLButtonElement;
    expect(menuButton).not.toBeNull();

    act(() => {
      menuButton.click();
    });

    const closeButton = container.querySelector('button[aria-label="Close main menu"]');
    expect(closeButton).not.toBeNull();
    expect(closeButton?.getAttribute("aria-expanded")).toBe("true");
  });
});
