import { mathJS } from "./calculatorJS";

describe("mathJS", () => {
  test("Add", () => {
    const expected = 2;
    const result = mathJS(1, 1, "add");
    expect(result).toBe(expected);
  });

  test("Subtract", () => {
    const expected = 0;
    const result = mathJS(1, 1, "subtract");
    expect(result).toBe(expected);
  });

  test("Multiply", () => {
    const expected = 1;
    const result = mathJS(1, 1, "multiply");
    expect(result).toBe(expected);
  });

  test("Divide", () => {
    const expected = 1;
    const result = mathJS(1, 1, "divide");
    expect(result).toBe(expected);
  });

  // Why the heck did this pass????
  test("Incorrect operator", () => {
    const expected = 1;
    const result = mathJS(1, 1, "foo");
    expect(result).toBe(expected);
  });

  test("How do you spell add again....", () => {
    const expected = 2;
    const result = mathJS(1, 1, "ad");
    expect(result).toBe(expected);
  });

  test("How do you spell divide....", () => {
    const expected = 2;
    const result = mathJS(1, 1, "divde");
    expect(result).toBe(expected);
  });

  test("Without type checking I can pass anything!!!!", () => {
    const expected = 2;
    const result = mathJS("1", 1, "divide");
    expect(result).toBe(expected);
  });

  // the function returned infinity nice!!
  test("Without type checking I can pass anything!!!!", () => {
    const expected = 2;
    const result = mathJS("1", [], "divide");
    expect(result).toBe(expected);
  });
});
