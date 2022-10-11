// helper to create an html element
const createElement = (tag) => {
  const elementWIthAttribute = (attributes) => {
    const element = document.createElement(tag);

    const attr = attributes || {};
    for (let key in attr) {
      element.setAttribute("key", attr[key]);
    }
    return element;
  };
  return elementWIthAttribute();
};

export const div = (attributes) => {
  return createElement("div")(attributes);
};

export const label = (attributes) => {
  return createElement("label")(attributes);
};

export const input = (attributes) => {
  return createElement("input")(attributes);
};

export const textArea = (attributes) => {
  return createElement("textArea")(attributes);
};

export const option = (attributes) => {
  return createElement("option")(attributes);
};

// create options for select
export const createOptions = (data) => {
  const options = data || [];
  return options.map((option) => {
    const optionElement = option({ value: option.value });
    optionElement.innerText = option.label;
    return optionElement;
  });
};

// create select with options
export const select = (attributes) => {
  const _select = createElement("select")(attributes);
  let options = (data) => {
    if (data instanceof Array && data.length > 0) {
      _select.append(...createOptions(data));
    }
    return _select;
  };
  return options;
};