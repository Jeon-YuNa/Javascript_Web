const btn = document.querySelector("#btn");
const state = document.querySelector("#state");
const btn2 = document.querySelector("#btn2");
const state2 = document.querySelector("#state2");

const orderPizza = () => {
  return new Promise((success, fail) => {
    const order = confirm("피자 주문하실래요?");
    if (order) success("피자 주문완료!");
    else fail("피자 주문취소!");
  });
};
btn.addEventListener("click", () => {
  orderPizza()
    .then((success) => {
      state.innerText = success;
    })
    .catch((fail) => {
      state.innerText = fail;
    });
});

const orderChekin = () => {
  return new Promise((success, fail) => {
    const order2 = confirm("치킨 주문하실래요?");
    if (order2) {
      success("치킨 주문 완료!");
    } else {
      fail("치킨 주문 취소!");
    }
  });
};
btn2.addEventListener("click", () => {
  orderChekin()
    .then((v) => {
      state2.innerText = v;
    })
    .catch((v) => (state2.innerText = v));
});
