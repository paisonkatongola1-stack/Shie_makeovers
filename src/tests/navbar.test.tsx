import { renderToString } from "react-dom/server";
import { describe, it, expect } from "vitest";
import Navbar from "@/components/layout/Navbar";

describe("Navbar Accessibility", () => {
  it("renders shopping cart and menu buttons with proper ARIA attributes", () => {
    const html = renderToString(<Navbar />);

    // Check shopping cart buttons have aria-label
    expect(html).toContain('aria-label="Shopping cart"');

    // Check initial mobile menu button has aria-label and aria-expanded
    expect(html).toContain('aria-label="Open navigation menu"');
    expect(html).toContain('aria-expanded="false"');
  });
});
