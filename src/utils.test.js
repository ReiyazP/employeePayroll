const { calculateTax, calculateSuperAnuation } = require("./utils");

test("calculates tax", () => {
  expect(calculateTax(37000)).toBe(3572);
  expect(calculateTax(90000)).toBe(20797);
  expect(calculateTax(180000)).toBe(54097);
});

test("calculates superAnnuation", () => {
  expect(calculateSuperAnuation(37000, 10, 0)).toEqual({
    superTax: 555,
    grossSalary: 37000,
    superannuation: 3700,
  });

  expect(calculateSuperAnuation(100000, 10.5, 0)).toEqual({
    superTax: 1575,
    grossSalary: 100000,
    superannuation: 10500,
  });

  expect(calculateSuperAnuation(100000, 10.5, 1)).toEqual({
    superTax: 1425.3,
    grossSalary: 90498,
    superannuation: 9502,
  });
});
