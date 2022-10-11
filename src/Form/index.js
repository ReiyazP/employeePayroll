import { getInput, getSelect, getTextArea, getButton } from "./formElements";
import { createGrid } from "../common/elements";

class Form {
  constructor({ ...attr }) {
    this.formAttributes = { ...attr };
    this.formItems = [];
    this.form = document.createElement("form", { id: "bankForm" });
    this.init();
  }

  formGroup(...elements) {
    const container = createGrid(...elements);
    this.form.append(container);
  }

  createFormFields(field, isGroup) {
    const { formItem, formField, name } = field;
    const newField = {
      name,
      formField,
    };

    this.formItems = [...(this?.formItems || []), newField];
    if (isGroup) {
      return formItem;
    }
    this.form.append(formItem);
    return newField;
  }

  textArea(label, textAreaAttributes, isGroup) {
    let textArea = getTextArea(label, textAreaAttributes);
    return this.createFormFields(textArea, isGroup);
  }

  input(label, inputAttributes, isGroup) {
    let input = getInput(label, inputAttributes);
    return this.createFormFields(input, isGroup);
  }

  select(label, inputAttributes, option, isGroup) {
    let select = getSelect(label, inputAttributes, option);

    return this.createFormFields(select, isGroup);
  }

  button(label, buttonAttributes, isGroup) {
    let button = getButton(label, buttonAttributes);
    return this.createFormFields(button, isGroup);
  }

  getFieldsvalue() {
    return this.formItems.reduce((acc, field) => {
      let value = field.formField?.value;
      if (field.name) {
        acc = { ...acc, [field.name]: value };
      }
      return acc;
    }, {});
  }
  createForm(parentId, title = "Form") {
    let _form = document.querySelector(`#${parentId}`);
    let _title = document.createElement("h3");
    _title.innerHTML = title;
    _form.append(_title, this.form);
  }

  init() {
    for (let attr in this.formAttributes) {
      this.form.setAttribute(attr, this.formAttributes[attr]);
    }
  }
}

export default Form;
