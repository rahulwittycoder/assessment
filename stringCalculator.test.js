const StringCalculator = require("./stringCalculator");

describe("StringCalculator", () => {
  let calc;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test("returns 0 for empty string", () => {
    expect(calc.Add("")).toBe(0);
  });
  test("returns number for single number", () => {
    expect(calc.Add("5")).toBe(5);
  });

  test("returns sum for two numbers", () => {
    expect(calc.Add("1,2")).toBe(3);
  });

  test("handles unknown amount of numbers", () => {
    expect(calc.Add("1,2,3,4")).toBe(10);
  });

  test("handles newlines between numbers", () => {
    expect(calc.Add("1\n2,3")).toBe(6);
  });

  test("supports different delimiters", () => {
    expect(calc.Add("//;\n1;2")).toBe(3);
  });

  test("throws on negative numbers", () => {
    expect(() => calc.Add("1,-2")).toThrow("negatives not allowed: -2");
  });

});
