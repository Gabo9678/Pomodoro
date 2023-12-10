const minutesSpan = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

var minutes = 1;

var finalTime = minutes * 60 * 1000;

var now;
var finalDate;

function start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "inline-flex";

  now = new Date().getTime();
  finalDate = now + finalTime;

  const actualTime = setInterval(function () {
    now = new Date().getTime();

    const distance = finalDate - now;

    const remainingMinutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

    minutesSpan.textContent = remainingMinutes;
    seconds.textContent = remainingSeconds;

    if (distance < 2) {
      clearInterval(actualTime);
      alert("¡Take a break for 5 minutes!");
    }
  }, 1000);
}
