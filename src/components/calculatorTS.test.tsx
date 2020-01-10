import { mathTS } from "./calculatorTS";

describe("mathTS", () => {
  test("Add", () => {
    const expected = 2;
    const result = mathTS(1, 1, "add");
    expect(result).toBe(expected);
  });

  test("Subtract", () => {
    const expected = 0;
    const result = mathTS(1, 1, "subtract");
    expect(result).toBe(expected);
  });

  test("Multiply", () => {
    const expected = 1;
    const result = mathTS(1, 1, "multiply");
    expect(result).toBe(expected);
  });

  test("Divide", () => {
    const expected = 1;
    const result = mathTS(1, 1, "divide");
    expect(result).toBe(expected);
  });
});
