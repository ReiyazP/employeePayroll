import { createGrid, div, label } from "./common/elements";

export const description = (fieldLabel, value) => {
  let wrapper = div({ id: "form-item" });

  let _label = label({ class: "label" });
  _label.innerText = fieldLabel;
  let description = div();
  description.innerText = value;

  wrapper.append(_label, value);
  return wrapper;
};

export const createEmployeeDescription = (data) => {
  let summary = document.querySelector("#employee-info");
  summary.innerHTML = null;
  let title = document.createElement("h3")
  title.innerText = "Summary"
  summary.append(title);
  let firstName = description("First Name", data.firstName || "-");
  let middleName = description("Middle Name", data.middleName || "-");
  let lastName = description("Last Name", data.lastName || "-");
  let row1 = createGrid(firstName, middleName, lastName);

  let country = description("Country", data.country || "-");
  let state = description("State/Province", data.state || "-");
  let city = description("City", data.state || "-");
  let row2 = createGrid(country, state, city);

  let zip = description("Zip", data.zip || "-");
  let phone = description("Phone", data.phone || "-");
  let row3 = createGrid(zip, phone);

  let address = description("Addresss", data.address || "-");
  let row4 = createGrid(address);

  let salaryHeading = document.createElement("h4");
  salaryHeading.innerText = "Salary Breakdown";

  let grossSalary = description("Gross Salary", `$${data.grossSalary || 0}`);

  let tax = description("Tax", `$${data.tax || 0}`);
  let netSalary = description("Net Salary", `$${data.netSalary || 0}`);
  let row5 = createGrid(grossSalary, tax, netSalary);

  let superannuation = description(
    "Superannuation (10.5%)",
    `$${data.superannuation || 0}` || "-"
  );
  let superTax = description(
    "Tax on Superannuation(15%)",
    `$${data.superTax || 0}`
  );
  let netSuper = description("Net Superannuation", `$${data.netSuper || 0}`);
  let row6 = createGrid(superannuation, superTax, netSuper);
  let finalIncome = description(
    "Final Income",
    `$${(data.netSalary || 0) + (data.netSuper || 0)}`
  );
  let monthlyDeposit = description(
    "Monthly Bank Deposit",
    `$${Math.round((data.netSalary || 0) / 12)}`
  );
  let row7 = createGrid(finalIncome, monthlyDeposit);

  summary.append(row1, row2, row3, row4, salaryHeading, row5, row6, row7);
};
createEmployeeDescription({});
