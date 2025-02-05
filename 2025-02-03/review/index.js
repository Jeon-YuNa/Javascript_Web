// const btnAll = document.querySelectorAll(".btn");
// const contentAll = document.querySelectorAll(".content");

// btnAll.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     contentAll.forEach((content) => {
//       content.classList.remove("active");
//     });
//     btnAll.forEach((item) => {
//       item.classList.remove("active");
//     });
//     btnAll[index].classList.add("active");
//     contentAll[index].classList.add("active");
//   });
// });

const countryList = document.querySelector("#countryList");
const capital = document.querySelector("#capital");
const desc = document.querySelector("#desc");
const country = [
  { capital: "london", nation: "England" },
  { capital: "paris", nation: "France" },
  { capital: "tokyo", nation: "Japan" },
  { capital: "seoul", nation: "Korea" },
  { capital: "newDelhi", nation: "India" },
  { capital: "beijing", nation: "China" },
  { capital: "canberra", nation: "Australia" },
];

country.forEach((v, i) => {
  const li = document.createElement("li");
  li.innerHTML = v.capital;
  li.addEventListener("click", () => {
    capital.innerHTML = v.capital.charAt(0).toUpperCase() + v.capital.slice(1);
    desc.innerHTML = `${v.capital} is the capital city of ${v.nation}`;
  });
  countryList.appendChild(li);
});
