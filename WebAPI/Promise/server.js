const btn = document.querySelector("#btn");
const number = document.querySelector("#number");
const info = document.querySelector("#info");
btn.addEventListener("click", () => {
  info.innerText = "";
  info.insertAdjacentHTML("beforeend", `<span class="loader"></span>`);
  fetch(`https://fakerapi.it/api/v2/books?_quantity=${number.value}`)
    .then((v) => v.json())
    .then((v) => {
      info.innerText = "";
      v.data.forEach((v) => {
        info.insertAdjacentHTML("beforeend", `<div>${v.title}</div>`);
      });
    });
});
