import Table from "./Table";
import { createGrid, div, label } from "./common/elements";

// create a key value pair like description
export const description = (fieldLabel, value) => {
  let wrapper = div({ id: "form-item" });

  let _label = label({ class: "label" });
  _label.innerText = fieldLabel;
  let description = div();
  description.innerText = value;

  wrapper.append(_label, value);
  return wrapper;
};

// create employe summary row by row
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


// table columns with it title
const columns = [
  {
    title: "Taxable Income",
    dataIndex: "taxableIncome",
  },
  { title: "Tax on this income", dataIndex: "taxOnThisIncome" },
];

// datasource for the table
const datasource =  [
  { taxableIncome: "0 - $18,200", taxOnThisIncome: "Nil" },
  {
    taxableIncome: "$18,201 - $37,000",
    taxOnThisIncome: "19c for each $1 over $18,200",
  },
  {
    taxableIncome: "$37,001 - $90,000",
    taxOnThisIncome: "$3,572 plus 32.5c for each $1 over $37,000",
  },
  {
    taxableIncome: "$90,001 - $180,000",
    taxOnThisIncome: "$20,797 plus 37c for each $1 over $90,000",
  },
  {
    taxableIncome: "$180,001 and over",
    taxOnThisIncome: "$54,097 plus 45c for each $1 over $180,000",
  },
]

// instantiate table with datasource
const table = new Table(columns, datasource);


table.createTable("table-wrapper");