// This is a custom type
type Operator = "add" | "subtract" | "multiply" | "divide";

function mathTS(value1: number, value2: number, operator: Operator) {
  if (operator === "add") {
    return value1 + value2;
  } else if (operator === "subtract") {
    return value1 - value2;
  } else if (operator === "multiply") {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}

export { mathTS };
