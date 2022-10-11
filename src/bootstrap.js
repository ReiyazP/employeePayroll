import Form from "./Form";
import { calculateSuperAnuation, calculateTax } from "./utils";
import { createEmployeeDescription } from "./createEmployeeInfo";

const form = new Form({ id: "bankForm" });

const firstName = form.input(
  "First Name",
  {
    name: "firstName",
    type: "text",
  },
  true
);
const middleName = form.input(
  "Middle Name",
  { name: "middleName", type: "text" },
  true
);

const lastName = form.input(
  "Last Name",
  { name: "lastName", type: "text" },
  true
);

form.formGroup(firstName, middleName, lastName);

const country = form.input("Country", { name: "country", type: "text" }, true);
const state = form.input(
  "State/Province",
  { name: "state", type: "text" },
  true
);
const city = form.input("City", { name: "city", type: "text" }, true);
form.formGroup(country, state, city);

const phoneNo = form.input("Phone", { name: "phone", type: "text" }, true);
const zip = form.input("Zip", { name: "zip", type: "text" }, true);
form.formGroup(zip, phoneNo);

form.textArea("Address", { name: "address" });

let salary = form.input(
  "Annual Salary",
  {
    name: "salary",
    type: "number",
    min: 0,
  },
  true
);

let isSuperIncluded = form.select(
  "Superannuation Type",
  { name: "isSuperIncluded" },
  [
    { value: 1, label: "Inclusive" },
    { value: 0, label: "Exclusive" },
  ],
  true
);

form.formGroup(salary, isSuperIncluded);
const submit = form.button("submit");

form.createForm("form-wrapper", "Employee Payroll");

submit.formField.onclick = (e) => {
  e.preventDefault();
  const fields = form.getFieldsvalue();
  const sal = Number(fields.salary || 0);
  let {
    grossSalary = 0,
    superannuation = 0,
    superTax = 0,
  } = calculateSuperAnuation(sal, 10.5, Number(fields.isSuperIncluded));

  let tax = calculateTax(grossSalary);
  let netSalary = grossSalary - tax;
  let netSuper = superannuation - superTax;
  let salaryDetails = {
    tax,
    netSalary,
    grossSalary,
    superannuation,
    superTax,
    netSuper,
  };
  createEmployeeDescription({
    ...fields,
    ...salaryDetails,
  });
};
