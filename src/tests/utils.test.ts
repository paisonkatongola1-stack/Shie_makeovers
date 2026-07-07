import { formatPrice, cn } from "../lib/utils";

describe("Utils", () => {
  test("formatPrice formats number to currency", () => {
    expect(formatPrice(25)).toBe("$25.00");
  });

  test("cn merges class names", () => {
    expect(cn("a", "b")).toBe("a b");
    expect(cn("a", { b: true, c: false })).toBe("a b");
  });
});
