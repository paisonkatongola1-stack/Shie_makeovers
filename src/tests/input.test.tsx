import { describe, it, expect, beforeEach, afterEach } from "vitest";
import React, { act } from "react";
import { createRoot, Root } from "react-dom/client";
import { Input, Textarea } from "../components/ui/Input";

// @ts-expect-error IS_REACT_ACT_ENVIRONMENT is needed for React act testing
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe("Input component accessibility", () => {
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

  it("associates label with input using generated id and htmlFor", () => {
    act(() => {
      root.render(<Input label="Full Name" placeholder="Jane Doe" />);
    });

    const label = container.querySelector("label");
    const input = container.querySelector("input");

    expect(label).not.toBeNull();
    expect(input).not.toBeNull();
    const htmlFor = label?.getAttribute("for");
    expect(htmlFor).toBeTruthy();
    expect(input?.getAttribute("id")).toBe(htmlFor);
  });

  it("uses provided id instead of generated id", () => {
    act(() => {
      root.render(<Input label="Email Address" id="custom-email" />);
    });

    const label = container.querySelector("label");
    const input = container.querySelector("input");

    expect(label?.getAttribute("for")).toBe("custom-email");
    expect(input?.getAttribute("id")).toBe("custom-email");
  });

  it("sets aria-invalid and aria-describedby when error is present", () => {
    act(() => {
      root.render(<Input label="Username" error="Username is required" />);
    });

    const input = container.querySelector("input");
    const errorMessage = container.querySelector("p");

    expect(input?.getAttribute("aria-invalid")).toBe("true");
    const describedBy = input?.getAttribute("aria-describedby");
    expect(describedBy).toBeTruthy();
    expect(errorMessage?.getAttribute("id")).toBe(describedBy);
    expect(errorMessage?.textContent).toBe("Username is required");
  });
});

describe("Textarea component accessibility", () => {
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

  it("associates label with textarea using generated id and htmlFor", () => {
    act(() => {
      root.render(<Textarea label="Special Notes" placeholder="Any requests?" />);
    });

    const label = container.querySelector("label");
    const textarea = container.querySelector("textarea");

    expect(label).not.toBeNull();
    expect(textarea).not.toBeNull();
    const htmlFor = label?.getAttribute("for");
    expect(htmlFor).toBeTruthy();
    expect(textarea?.getAttribute("id")).toBe(htmlFor);
  });

  it("sets aria-invalid and aria-describedby when error is present", () => {
    act(() => {
      root.render(<Textarea label="Notes" error="Notes too long" />);
    });

    const textarea = container.querySelector("textarea");
    const errorMessage = container.querySelector("p");

    expect(textarea?.getAttribute("aria-invalid")).toBe("true");
    const describedBy = textarea?.getAttribute("aria-describedby");
    expect(describedBy).toBeTruthy();
    expect(errorMessage?.getAttribute("id")).toBe(describedBy);
    expect(errorMessage?.textContent).toBe("Notes too long");
  });
});
