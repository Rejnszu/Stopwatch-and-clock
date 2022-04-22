let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let timerWatch = document.querySelector(".watch_text");
let milis = 0;
let secs = 0;
let mins = 0;
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let mili = document.getElementById("mili");
let intervalWatch;
function stopWatch() {
  timer();
}

function timer() {
  milis++;
  if (milis <= 9) {
    mili.innerHTML = "0" + milis;
  } else if (milis > 9) {
    mili.innerHTML = milis;
  }
  if (milis > 99) {
    secs++;
    milis = 0;

    mili.innerHTML = "00";
    sec.innerHTML = "0" + secs;
  }
  if (secs > 9) {
    sec.innerHTML = secs;
  }
  if (secs > 59) {
    mins++;
    secs = 0;
    sec.innerHTML = "00";
    min.innerHTML = "0" + mins;
  }
  if (mins > 9) {
    min.innerHTML = mins;
  }
}

function startWatch() {
  clearInterval(intervalWatch);
  intervalWatch = setInterval(timer, 1);
}
function stopWatch() {
  clearInterval(intervalWatch);
}
function resetWatch() {
  clearInterval(intervalWatch);
  secs = 0;
  mins = 0;
  milis = 0;
  mili.innerHTML = "00";
  sec.innerHTML = "00";
  min.innerHTML = "00";
}

start.addEventListener("click", startWatch);
stop.addEventListener("click", stopWatch);
reset.addEventListener("click", resetWatch);

let secondHand = document.querySelector(".second-arrow");
let minuteHand = document.querySelector(".minute-arrow");
let hourHand = document.querySelector(".hour-arrow");
function getHour() {
  let date = new Date();

  let hour = date.getHours();

  let minute = date.getMinutes();
  let second = date.getSeconds();
  secondHand.style.transform = "rotateZ(" + 6 * second + "deg)";
  minuteHand.style.transform = "rotateZ(" + 6 * minute + "deg)";
  hourHand.style.transform = "rotateZ(" + 30 * hour + "deg)";
}
getHour();
setInterval(getHour, 1000);

let number = document.querySelectorAll(".number");
let reverse = document.querySelector(".reverse");
number.forEach((n, i) => (n.style.transform = "rotate(" + 30 * i + "deg)"));
