//storage(저장소)
//저장 형태가 json
const stringifyData = JSON.stringify([
  { name: "아메리카노", price: 2500 },
  { name: "라떼", price: 3500 },
]);

console.log("coffee", stringifyData);
