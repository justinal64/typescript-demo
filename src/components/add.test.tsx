import { addTS, addJS } from "./add";

describe("Add function with Typescript", () => {
  test("Add with typescript support", () => {
    const result = 2;
    const answer = addTS(1, 1);
    expect(answer).toBe(result);
  });

  test("Add with typescript support", () => {
    const result = 2.2;
    const answer = addTS(1.2, 1);
    expect(answer).toBe(result);
  });
});

describe("Add function without Typescript", () => {
  test("Add with numbers as params", () => {
    const result = 2;
    const answer = addJS(1, 1);
    expect(answer).toBe(result);
  });

  test("Add with decimal as 1 params", () => {
    const result = 2.2;
    const answer = addJS(1.2, 1);
    expect(answer).toBe(result);
  });

  test("Add with number and string as params", () => {
    const result = 2;
    const answer = addJS(1, "2");
    expect(answer).toBe(result);
  });

  test("Add with [] and string as params", () => {
    const result = 2;
    const answer = addJS([], "2");
    expect(answer).toBe(result);
  });

  test("Add with {} and string as params", () => {
    const result = 2;
    const answer = addJS({}, "2");
    expect(answer).toBe(result);
  });
});
