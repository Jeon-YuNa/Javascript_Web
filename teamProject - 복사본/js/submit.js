const header = document.querySelector("#header");
const searchPage = document.querySelector(".search-background");
const submitBtn = document.querySelector("#submit");
const date = document.querySelector("#dateInput");
const adultNum = document.querySelector("#adultNum");
const childNum = document.querySelector("#childNum");

const airplane = document.querySelector(".airplane");
const h2 = document.createElement("h2");
const span = document.createElement("span");

submitBtn.addEventListener("click", () => {
  console.log(arriveKo.innerHTML); // 도착지
  console.log(date.value); //날짜
  console.log(adultNum.innerHTML); //어른 수
  console.log(childNum.innerHTML); //어린이 수

  if (+adultNum.innerHTML == 0 && +childNum.innerHTML == 0) {
    alert("인원수를 추가해주세요.");
  } else {
    searchPage.style.setProperty("display", "none");
  }

  h2.innerHTML = `${departEn.innerHTML}(${departKo.innerHTML}) → ${arriveEn.innerHTML}(${arriveKo.innerHTML})`;
  span.innerHTML = `${date.value} | ${
    +adultNum.innerHTML + +childNum.innerHTML
  }명`;
});

//헤더 클릭하면 검색창 나오기
header.addEventListener("click", () => {
  searchPage.style.setProperty("display", "block");
});

//헤더에 정보 넣기
header.appendChild(h2);
header.appendChild(span);
