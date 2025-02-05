const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  const { target } = e;
  const { innerHTML } = target;
  target.innerHTML = innerHTML == "버튼" ? "버튼아님" : "버튼";
});

const input = document.querySelector("#input");

input.addEventListener("input", (e) => {
  const { target } = e;
  console.log(target.value.length);
});
