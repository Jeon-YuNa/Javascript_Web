// const input = document.querySelector("#input");
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   if (input.type == "text") {
//     input.type = "password";
//     button.innerHTML = "😀";
//   } else {
//     input.type = "text";
//     button.innerHTML = "🙃";
//   }
// });

const input = document.querySelector("#input");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  if (input.type == "password") {
    input.type = "text";
    button.innerHTML = "🐵";
  } else {
    input.type = "password";
    button.innerHTML = "🙈";
  }
});
button.classList.remove("");
button.classList.add("");
