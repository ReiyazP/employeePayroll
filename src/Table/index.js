class Table {
  constructor(columns, data) {
    this.columns = columns || [];
    this.data = data || [];
    this.table = document.createElement("table");
    this.thead = document.createElement("thead");
    this.tbody = document.createElement("tbody");
    this.init();
  }
  createHeader() {
    let tr = document.createElement("tr");
    let columns = this.columns.map((col, index) => {
      let th = document.createElement("th");
      th.setAttribute("key", index);
      th.setAttribute("data-index", col.dataIndex);
      th.innerText = col.title;
      return th;
    });
    tr.append(...columns);
    this.thead.append(tr);
  }
  createBody() {
    let count = 0;
    let header = this.thead.firstElementChild.children;

    let rows = this.data.reduce((acc, val) => {
      let tr = document.createElement("tr");
      let row = [];
      tr.setAttribute("key", count);
      count++;
      for (let col in header) {
        let column = header[col];
        if (column instanceof HTMLElement) {
          let dataIndex = column.dataset.index;
          const td = document.createElement("td");
          td.innerText = val[dataIndex];
          row = [...row, td];
        }
      }
      tr.append(...row);
      acc = [...acc, tr];
      return acc;
    }, []);
    this.tbody.append(...rows);
  }
  createTable(parentId) {
    document.querySelector(`#${parentId}`).append(this.table);
  }
  init() {
    this.createHeader();
    this.createBody();
    this.table.append(this.thead, this.tbody);
    this.table.setAttribute("bordered", true)
  }
}

export default Table;
