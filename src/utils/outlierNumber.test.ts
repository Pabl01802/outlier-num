import { describe, it, expect } from "vitest";
import { outlierNum } from "./outlierNumber";

describe("outlierNum", () => {
  it("returns outliner number from given array", () => {
    expect(outlierNum([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
    expect(outlierNum([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
    expect(outlierNum([1, 3])).toBe(null);
    expect(outlierNum([1, 3, 5])).toBe(null);
    expect(outlierNum([2, 4, 6])).toBe(null);
  });
});
