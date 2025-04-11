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

  test("shows all negatives in exception", () => {
    expect(() => calc.Add("1,-2,-3")).toThrow("negatives not allowed: -2, -3");
  });

  test("tracks how many times Add was called", () => {
    calc.Add("1");
    calc.Add("1,2");
    expect(calc.getCalledCount()).toBe(2);
  });
  
  test("ignores numbers bigger than 1000", () => {
    expect(calc.Add("2,1001")).toBe(2);
  });

  test("supports delimiters of any length", () => {
    expect(calc.Add("//[***]\n1***2***3")).toBe(6);
  });

  test("supports multiple delimiters", () => {
    expect(calc.Add("//[*][%]\n1*2%3")).toBe(6);
  });

  test("supports multiple long delimiters", () => {
    expect(calc.Add("//[**][%%]\n1**2%%3")).toBe(6);
  });
  
});
