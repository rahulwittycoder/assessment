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
});
