import { div, label, input, select, textArea } from "../common/elements";

// create a wrapper for a form item with built in label
export const createWrapper = (fieldLabel) => {
  let wrapper = div({ id: "form-item" });

  let _label = label({ class: "label" });

  _label.innerText = fieldLabel;
  wrapper.append(_label);
  return wrapper;
};

// create a form field with its name and label
const createFields = (label, name, formField) => {
  let wrapper = createWrapper(label);

  wrapper.append(formField);

  return { formItem: wrapper, formField, label, name };
};

export const getInput = (label, inputAttributes) => {
  let _input = input(inputAttributes);

  return createFields(label, inputAttributes?.name, _input);
};

export const getTextArea = (label, textAreaAttributes) => {
  let _input = textArea(textAreaAttributes);

  return createFields(label, textAreaAttributes?.name, _input);
};

export const getSelect = (label, selectAttribute, options = []) => {
  let _select = select(selectAttribute)(options);

  return createFields(label, selectAttribute?.name, _select);
};
