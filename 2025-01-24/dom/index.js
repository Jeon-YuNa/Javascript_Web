const btn = document.createElement("button");
btn.innerText = "고기쌀롱";
// document.body.appendChild(btn);
const h1 = document.createElement("h1");
h1.innerText = "고기쌀롱 어서오고";
h1.style.color = "red";
document.body.appendChild(h1);
// 삼겹살, 목살, 돼지갈비, 양념갈비, 항정살, 갈매기살,
const meat = [
  "삼겹살",
  "목살",
  "돼지갈비",
  "양념갈비",
  "항정살",
  "갈매기살",
  "꼬들살",
  "냉삼",
  "뽈살",
  "돼지껍데기",
];
meat.forEach((x, i) => {
  const btn = document.createElement("button");
  //홀수 배경 파랑 짝수 배경 노랑
  btn.innerText = `${i + 1}번째 ` + x;
  (i + 1) % 2
    ? (btn.style.background = "blue")
    : (btn.style.background = "yellow");
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    alert(x);
  });
});
