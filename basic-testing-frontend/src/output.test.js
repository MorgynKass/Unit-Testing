import { test, expect, describe } from "vitest";
import { generateResultTxt } from "./output";

describe("generateResultTxt()", () => {
  test("should return a string no matter what is passed in", () => {
    const valueOne = 1;
    const valueTwo = "invalid";
    const valueThree = false;

    const resultOne = generateResultTxt(valueOne);
    const resultTwo = generateResultTxt(valueTwo);
    const resultThree = generateResultTxt(valueThree);

    expect(resultOne).toBeTypeOf("string");
    expect(resultTwo).toBeTypeOf("string");
    expect(resultThree).toBeTypeOf("string");
  });

  test("should return a string that contains the calculation result if a number is provided as a result", () => {
    const result = 5;

    const resultText = generateResultText(result);

    expect(resultText).toContain(result.toString());
  });

  test('should return an empty string if "no-calc" is provided as a result', () => {
    const result = "no-calc";

    const resultText = generateResultText(result);

    expect(resultText).toBe("");
  });

  test('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = "invalid";

    const resultText = generateResultText(result);

    expect(resultText).toContain("Invalid");
  });
});
