import { data } from "./data.js";
const header = document.querySelector("#header");
const searchPage = document.querySelector(".search-background");
const searchClose = document.querySelector("#search .close");
const submitBtn = document.querySelector("#submit");
const date = document.querySelector("#dateInput");
const adultNum = document.querySelector("#adultNum");
const childNum = document.querySelector("#childNum");
const departEn = document.querySelector(".depart strong");
const departKo = document.querySelector(".depart span");
const ListContainer = document.querySelector("#airplaneInfoContainer");
const h2 = document.createElement("h2");
const span = document.createElement("span");

submitBtn.addEventListener("click", () => {
  if (+adultNum.innerHTML == 0 && +childNum.innerHTML == 0) {
    alert("인원수를 추가해주세요.");
  } else {
    searchPage.style.setProperty("display", "none");
  }
  //헤더 info 입력
  h2.innerHTML = `${departEn.innerHTML}(${departKo.innerHTML}) → ${arriveEn.innerHTML}(${arriveKo.innerHTML})`;
  span.innerHTML = `${date.value} | ${
    +adultNum.innerHTML + +childNum.innerHTML
  }명`;

  //인원수대로 가격 합산
  const adultNumber = Number(adultNum.innerHTML);
  const childNumber = Number(childNum.innerHTML);
  const getPrice = (x) => {
    if (adultNumber == 0 && 1 <= childNumber)
      return (x = childNumber * (x * 0.7));
    else if (childNumber == 0 && 1 <= adultNumber) return (x = x * adultNumber);
    else return (x = x * adultNumber + childNumber * (x * 0.7));
  };

  //검색결과 리스트화

  const filter = data.filter((x) => {
    return (
      x.destination.includes(arriveKo.innerHTML) && x.date.includes(date.value)
    );
  });
  console.log(filter);
  ListContainer.innerHTML = "";
  filter.forEach((v) => {
    const priceComma = v.price
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    const allPriceComma = getPrice(v.price)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    const airplaneDiv = `
    <div class="ticketLayout">
      <div class="ticketBox">
        <div class="ticketBoxLeft">
          
          <p class="ticketTime"><i class="fa-solid fa-plane-departure"></i>  ${v.departureTime} ~ ${v.arrivalTime}</p>
          <p class="ticketCompany"> ICN - KIX ${v.company}</p>
        </div>
        <div class="ticketBoxRight">
          <p class="ticketFlyingTime">직항, 2시간</p>
          <p class="ticketPrice"> ${priceComma}원</p>
          <p class="ticketPriceAdd"> 총 가격: ${allPriceComma}원</p>
        </div>
      </div>
    </div>`;
    ListContainer.insertAdjacentHTML("beforeend", airplaneDiv);
  });
});

//헤더 클릭하면 검색창 나오기
header.addEventListener("click", () => {
  searchPage.style.setProperty("display", "block");
});

//검색창 클로즈 버튼
searchClose.addEventListener("click", () => {
  searchPage.style.setProperty("display", "none");
});

//헤더에 정보 넣기
header.appendChild(h2);
header.appendChild(span);
