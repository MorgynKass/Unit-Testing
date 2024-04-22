import { test, expect, describe } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers";

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

describe("cleanNumbers()", () => {
  test("should return an array of number values if an array of string values if provided", () => {
    const values = [1, 2];

    const result = cleanNumbers(values);

    expect(result[0]).toBeTypeOf("number");
  });

  test("should throw and error if an array with at least one empty string is provided", () => {
    const values = ["", 1];

    const result = () => cleanNumbers(values);

    expect(result).toThrow();
  });
});
