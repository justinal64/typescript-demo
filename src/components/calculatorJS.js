function mathJS(value1, value2, operator) {
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

export { mathJS };
