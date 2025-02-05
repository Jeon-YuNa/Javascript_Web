export const changeGreen = (target, bool) => {
  //타겟의 스타일은 bool이 참이라면 앞의값 거짓이라면 뒤의값
  target.style.setProperty("color", bool ? "#3CDD5C" : "#aaa");
};
export const changeButton = (target, bool) => {
  target.style.setProperty("opacity", bool ? "1" : "0.3");
};
