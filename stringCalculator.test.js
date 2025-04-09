const StringCalculator = require("./stringCalculator");

describe("StringCalculator", () => {
  let calc;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test("returns 0 for empty string", () => {
    expect(calc.Add("")).toBe(0);
  });
});
