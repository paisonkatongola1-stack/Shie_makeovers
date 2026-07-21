import { describe, test, expect, beforeAll } from "vitest";
import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { Input, Textarea } from "../components/ui/Input";

beforeAll(() => {
  // @ts-expect-error IS_REACT_ACT_ENVIRONMENT is a global hook flag for React tests
  global.IS_REACT_ACT_ENVIRONMENT = true;
});

describe("Input and Textarea components", () => {
  test("Input correctly associates the label with the input element via unique id", async () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const root = createRoot(container);

    await act(async () => {
      root.render(<Input label="My Full Name" placeholder="Jane Doe" />);
    });

    const label = container.querySelector("label");
    const input = container.querySelector("input");

    expect(label).not.toBeNull();
    expect(input).not.toBeNull();
    expect(label?.getAttribute("for")).toBe(input?.getAttribute("id"));
    expect(input?.getAttribute("placeholder")).toBe("Jane Doe");

    await act(async () => {
      root.unmount();
    });
    document.body.removeChild(container);
  });

  test("Textarea correctly associates the label with the textarea element via unique id", async () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const root = createRoot(container);

    await act(async () => {
      root.render(<Textarea label="Special Notes" placeholder="Write notes here" />);
    });

    const label = container.querySelector("label");
    const textarea = container.querySelector("textarea");

    expect(label).not.toBeNull();
    expect(textarea).not.toBeNull();
    expect(label?.getAttribute("for")).toBe(textarea?.getAttribute("id"));
    expect(textarea?.getAttribute("placeholder")).toBe("Write notes here");

    await act(async () => {
      root.unmount();
    });
    document.body.removeChild(container);
  });
});
