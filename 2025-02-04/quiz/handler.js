import { elements } from "./elements.js";
import { validateLength, validateSepcial } from "./vaildator.js";
import { changeGreen, changeButton } from "./func.js";

export const handlerInputEvent = (e) => {
  const { value } = e.target;
  const isLengthValid = validateLength(value);
  const isSpecialValid = validateSepcial(value);
  const validation = [
    { element: elements.check2, valid: isLengthValid },
    { element: elements.check1, valid: isSpecialValid },
    { element: elements.button, valid: isLengthValid && isSpecialValid },
  ];
  validation.forEach((v) => changeGreen(v.element, v.valid));
  changeButton(validation[2].element, validation[2].valid);
};
