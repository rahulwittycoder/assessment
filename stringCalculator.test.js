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
  
});
