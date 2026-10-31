import { describe, it, expect, beforeEach } from "vitest";
import { act } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "../components/layout/Navbar";

beforeEach(() => {
  // @ts-expect-error React testing flag for act()
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
});

describe("Navbar Accessibility", () => {
  it("renders shopping bag buttons with accessible labels", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const root = createRoot(container);

    act(() => {
      root.render(<Navbar />);
    });

    const shoppingButtons = container.querySelectorAll(
      'button[aria-label="View shopping bag"]'
    );
    expect(shoppingButtons.length).toBe(2);

    act(() => {
      root.unmount();
    });
    container.remove();
  });

  it("toggles mobile menu accessibility attributes on click", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const root = createRoot(container);

    act(() => {
      root.render(<Navbar />);
    });

    const toggleButton = container.querySelector(
      'button[aria-controls="mobile-navigation"]'
    );
    expect(toggleButton).not.toBeNull();
    expect(toggleButton?.getAttribute("aria-expanded")).toBe("false");
    expect(toggleButton?.getAttribute("aria-label")).toBe("Open main menu");

    act(() => {
      (toggleButton as HTMLButtonElement).click();
    });

    expect(toggleButton?.getAttribute("aria-expanded")).toBe("true");
    expect(toggleButton?.getAttribute("aria-label")).toBe("Close main menu");

    const mobileMenu = container.querySelector("#mobile-navigation");
    expect(mobileMenu).not.toBeNull();

    act(() => {
      root.unmount();
    });
    container.remove();
  });
});
