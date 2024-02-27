const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// Variables For Time Values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables For Leading Zero(0)
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables For Set Interval & Timer status
let timeInterval = null;
let timeStatus = "stopped"; // Initialize as "stopped"

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  leadingSeconds = seconds < 10 ? "0" + seconds : seconds;
  leadingMinutes = minutes < 10 ? "0" + minutes : minutes;
  leadingHours = hours < 10 ? "0" + hours : hours;

  let displayTimer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

// Uncomment the line below if you want the timer to start automatically
// window.setInterval(stopWatch, 1000);

startStopBtn.addEventListener("click", function () {
  if (timeStatus === "stopped") {
    timeInterval = window.setInterval(stopWatch, 1);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timeStatus = "started";
  } else {
    window.clearInterval(timeInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timeStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timeInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("timer").innerHTML = "00:00:00";
});
