import { test, expect, describe } from "vitest";
import { transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  test("should transform a string number to a number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBeTypeOf("number");
  });

  test("should transform a string number to a number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });

  test("should yield NaN for non-transformable values", () => {
    const input = "invalid";
    const inputTwo = {};

    const result = transformToNumber(input);
    const resultTwo = transformToNumber(inputTwo);

    expect(result).toBeNaN();
    expect(resultTwo).toBeNaN();
  });
});
