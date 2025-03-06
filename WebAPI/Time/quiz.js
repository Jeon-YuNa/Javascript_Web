// 시계만들기
const clock = document.querySelector("#clock");

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let hour = h < 10 ? `0${h}` : h;
  let minute = m < 10 ? `0${m}` : m;
  let second = s < 10 ? `0${s}` : s;

  clock.innerHTML = `${hour}:${minute}:${second}`;
}, 1000);
