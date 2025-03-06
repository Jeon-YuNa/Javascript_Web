navigator.geolocation.getCurrentPosition((v) => {
  const { latitude, longitude } = v.coords;
  const apikey = "f5fa108b3082dc5b455edaa7c42c71b0";
  const weatherImage = {
    Snow: "snow.jpg",
    Wind: "wind.jpg"
  }
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
  )
    .then((response) => response.json())
    .then((v) => {
      document.body.style.backgroundImage=`url(${weatherImage})`
    });
});
