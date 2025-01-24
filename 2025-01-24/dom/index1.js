const article = document.createElement("article");
article.style.border = "1px solid black";
article.style.padding = "10px";
const h1 = document.createElement("h1");
h1.innerText = "피자스쿨";
const button = document.createElement("button");
button.innerText = " 페퍼로니피자";
const pizza = () => {
  alert("피자");
};
button.addEventListener("click", () => {
  pizza();
});

document.body.appendChild(article);
article.appendChild(h1);
article.appendChild(button);
