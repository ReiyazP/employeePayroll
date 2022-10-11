let TAX_BRACKETS = [
  { limit: 180001, tax: 0.45 },
  { limit: 90001, tax: 0.37 },
  { limit: 37001, tax: 0.325 },
  { limit: 18201, tax: 0.19 },
];

// function to get the index of nearest limit less than the salary
const getIndex = (sal, index) => {
  if (typeof index !== "number") {
    return TAX_BRACKETS.reduce((acc, val) => {
      if (sal > val.limit) {
        return acc;
      }
      return acc + 1;
    }, 0);
  }
  return index;
};

// recursive function to calculate the total tax on the salary

export const calculateTax = (sal, index, accTax = 0) => {
  let i = getIndex(sal, index);
  if (isNaN(TAX_BRACKETS[i]?.limit)) return 0;
  let reducedSalary = sal - (TAX_BRACKETS[i]?.limit || 0) + 1;
  let newAccTax = accTax + reducedSalary * TAX_BRACKETS[i]?.tax;
  if (sal - reducedSalary > TAX_BRACKETS[i + 1]?.limit) {
    return calculateTax(sal - reducedSalary, i + 1, newAccTax);
  }
  return newAccTax;
};

export const calculateSuperAnuation = (sal, rate, isInclusive) => {
  let grossSalary = Number(sal);
  let superannuation = Math.round((grossSalary * rate) / 100);
  if (isInclusive) {
    grossSalary = Math.round(sal / (1 + rate / 100));
    superannuation = sal - grossSalary;
  }

  let superTax = superannuation * 0.15;

  return { grossSalary, superannuation, superTax };
};