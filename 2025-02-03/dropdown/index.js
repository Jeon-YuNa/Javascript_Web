const clickBtn = document.querySelector("button");
const downMenu = document.querySelector("ul");
downMenu.style.display = "none";
clickBtn.addEventListener("click", () => {
  if (downMenu.style.display == "none") {
    downMenu.style.display = "block";
  } else {
    downMenu.style.display = "none";
  }
});

const pagePrive = document.querySelector(".prev");
const pageNext = document.querySelector(".next");
const pageNum = document.querySelectorAll(".page");
pageNum[0].style.backgroundColor = "blue";
pageNum[0].style.color = "white";

pageNum.forEach((v, i) => {
  v.addEventListener("click", () => {
    pageNum.forEach((v) => {
      v.style.backgroundColor = "white";
      v.style.color = "black";
    });
    pageNum[i].style.backgroundColor = "blue";
    pageNum[i].style.color = "white";
  });
});

pageNext.addEventListener("click", (v, i) => {
  if (((i = 1), i < 6, i++)) {
    console.log(i);
    pageNum[i - 1].style.backgroundColor = "blue";
    pageNum[i - 1].style.color = "white";
    return (i = i);
  }
});
