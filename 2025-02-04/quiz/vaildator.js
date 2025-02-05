const include = ["!", "@", "$", "%", "^", "*", "_", "+", "~"]; // 특수문자 리스트
const MIN_LENGTH = 6;
const MAX_LENGTH = 20;

export const validateLength = (value) =>
  MIN_LENGTH <= value.length && value.length <= MAX_LENGTH; // 6~20 글자 내인지
export const validateSepcial = (value) =>
  include.some((v) => value.includes(v)); // 특수문자를 포함하는지
