import { extractInput } from "./src/parser.js";
import { calculateResult } from "./src/math.js";
import { generateResultTxt, outputResult } from "./src/output.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();

  const values = extractInput(form);

  const result = calculateResult(values);

  const resultTxt = generateResultTxt(result);

  outputResult(resultTxt);
}

form.addEventListener("submit", formSubmitHandler);
