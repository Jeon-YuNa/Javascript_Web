const makeDough = () => {
  return new Promise((success, fail) => {
    console.log("도우 만들기");
    setTimeout(() => {
      success("도우 준비됨");
    }, 2000);
  });
};
const makeTomato = () => {
  return new Promise((success, fail) => {
    console.log("토마토 바르기");
    setTimeout(() => {
      success("토마토 바름");
    }, 1000);
  });
};
const makeCheese = () => {
  return new Promise((success, fail) => {
    console.log("치즈 뿌리기");
    setTimeout(() => {
      success("치즈 뿌림");
    }, 1000);
  });
};
const bakePizza = () => {
  return new Promise((success, fail) => {
    console.log("화덕에 넣음");
    setTimeout(() => {
      success("화덕에 구워짐");
    }, 3000);
  });
};
const packPizza = () => {
  return new Promise((success, fail) => {
    console.log("피자 싸는중");
    setTimeout(() => {
      success("피자 포장 완료");
    }, 2000);
  });
};
makeDough()
  .then((v) => {
    console.log(v);
    return makeTomato();
  })
  .then((v) => {
    console.log(v);
    return makeCheese();
  })
  .then((v) => {
    console.log(v);
    return packPizza();
  })
  .then((v) => {
    console.log(v);
  });
