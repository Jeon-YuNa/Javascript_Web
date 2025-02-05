import { makeCard, makeCard1 } from "./component/card.js";

const clothes = document.querySelector("#clothes");

const data = [
  {
    imgSrc:
      "https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg",
    title: "title",
  },
];

data.forEach((v) => {
  const card = makeCard(v.imgSrc, v.title);
  clothes.appendChild(card);
  clothes.insertAdjacentHTML("beforeend", makeCard1(v.imgSrc, v.title));
});
