let counter = document.querySelector("#counter");
const input = document.querySelector("#num");
const btn = document.querySelector("#btn");

// setInterval(() => {
//   counter.innerHTML =
//     counter.innerHTML > 0 ? counter.innerHTML - 1 : counter.innerHTML;
// }, 1000);
counter.innerHTML = input.value;
btn.addEventListener("click", () => {
  counter.innerHTML = input.value;
  const count = setInterval(() => {
    if (counter.innerHTML <= 0) {
      clearInterval(count);
      counter.innerHTML = 0;
    } else {
      console.log(counter.innerHTML);
      counter.innerHTML =
        counter.innerHTML > 0 ? counter.innerHTML - 1 : counter.innerHTML;
    }
  }, 1000);
});
