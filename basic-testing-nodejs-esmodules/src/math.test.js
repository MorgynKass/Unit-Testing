import { test, expect, describe } from "vitest";
import { add } from "./math";

describe("add()", () => {
  test("should pass back the sum of all numbers in an array", () => {
    // Arrange the informantion
    const numbers = [1, 2];

    // Act the funtion or unit to the info
    const result = add(numbers);

    // Assert or test
    const expectedResult = numbers.reduce(
      (prevValue, curveValue) => prevValue + curveValue,
      0
    );
    expect(result).toBe(expectedResult);
  });

  test("shoul yield NaN if at least one invalid number is provided", () => {
    const inputs = ["invalid", 1];

    const result = add(inputs);

    expect(result).toBeNaN();
  });

  test("should yield a correct sum if an array of numeric string values if provided", () => {
    const numbers = ["1", "2"];

    const result = add(numbers);

    const expectedResult = numbers.reduce(
      (prevValue, curveValue) => +prevValue + +curveValue,
      0
    );
    expect(result).toBe(expectedResult);
  });

  test("should yield 0 if array is empty", () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
  });

  test("should throw and error if no value is passed into the function", () => {
    const resultFn = () => {
      add();
    };

    expect(resultFn).toThrow();
  });

  test("should throw an error if provided with multiple argumets instead of an array", () => {
    const numOne = 1;
    const numTwo = 2;

    const resultFn = () => {
      add(numOne, numTwo);
    };

    expect(resultFn).toThrow("is not iterable");
  });
});
