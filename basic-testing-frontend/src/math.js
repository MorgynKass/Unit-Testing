import { cleanNumbers } from "./util/numbers";

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  
  return sum;
}

export function calculateResult(values) {
  let result = "";
  try {
    const numbers = cleanNumbers(values);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  return result;
}
