const btn = document.querySelector("#btn");
const box = document.querySelector("#box");
const loading = document.querySelector("#loading");

btn.addEventListener("click", () => {
  loading.insertAdjacentHTML("beforeend", `<span class="loader"></span>`);
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((v) => {
      console.log(v);
      loading.innerHTML = "";

      v.products.forEach((v) => {
        box.insertAdjacentHTML(
          "beforeend",
          `<figure><img src=${v.images}><figcaption>${v.title}</figcaption></figure>`
        );
      });
    });
});
