const tabBtn = document.querySelectorAll(".btn");
const tabContent = document.querySelectorAll(".content");
const backgroundColor = ["blue", "green", "pink", "red"];
tabBtn.forEach((v, i) => {
  v.addEventListener("click", () => {
    tabBtn.forEach((v) => {
      v.style.background = "#ccc";
    });
    tabContent.forEach((v) => {
      v.style.display = "none";
    });

    tabBtn[i].style.background = backgroundColor[i];
    tabContent[i].style.background = backgroundColor[i];
    tabContent[i].style.display = "block";
  });
});

// const list = [
//   { id: "home", desc: "home somthing", bg: "red" },
//   { id: "home", desc: "home somthing", bg: "red" },
//   { id: "home", desc: "home somthing", bg: "red" },
//   { id: "home", desc: "home somthing", bg: "red" },
// ];
// const contents = document.querySelector(".content");
// const title = document.querySelector(".title");
// const desc = document.querySelector(".desc");

// list.forEach((v) => {
//   const btn = document.querySelector("." + v.id);
//   btn.addEventListener("click", () => {
//     list.forEach((v) => {
//       const target = document.querySelector("." + v.id);
//       target.style.backgroundColor = "#efefef";
//       target.style.color = "black";
//     });
//     btn.style.backgroundColor = v.bg;
//     btn.style.color = "white";
//     contents.style.backgroundColor = v.bg;
//     title.innerHTML = v.id;
//     desc.innerHTML = v.desc;
//   });
// });
