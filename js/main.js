let secHand = document.querySelector(".sec-hand");
let minHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");

function startClock(){
  const now = new Date();

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  const secDeg = (sec / 60) * 360;
  const minDeg = (min / 60) * 360;
  const hourDeg = (hour / 12) * 360;

  secHand.style.transform = `rotate(${secDeg + 90}deg)`;
  minHand.style.transform = `rotate(${minDeg + 90}deg)`;
  hourHand.style.transform = `rotate(${hourDeg + 90}deg)`;
}

setInterval(() => {
  startClock()
}, 1000);