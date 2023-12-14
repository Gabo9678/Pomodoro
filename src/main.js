

//variables
let minutes = 25;
let seconds = "00";
let breakTime = 5;
let actualTime;

const reset = document.querySelector('#reset');


//display
window.onload = () =>{

  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

}

//start Timer
const start = () =>{

  if(actualTime){
    clearInterval(actualTime);
  }

  //change the time

  seconds = 59;

  let workMinutes = minutes - 1;
  let breakMinutes = breakTime - 1;
  let breakCount = 0;

  //countdown

  const timerFunction = () => {
   document.getElementById("minutes").innerHTML = workMinutes;
   document.getElementById("seconds").innerHTML = seconds;

    seconds = seconds - 1;

    
  if(workMinutes === 0 && seconds === 0){
    clearInterval(actualTime); // Stop the countdown
    alert("¡Take a break for 5 minutes!");
  }

    if(seconds === 0){
      workMinutes = workMinutes - 1;
      seconds = 59;
    }
  }

  //start countdown
  actualTime = setInterval(timerFunction, 1000) // 1000 = 1s
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "inline-flex";


  // now = new Date().getTime();
  // finalDate = now + finalTime;

  // const actualTime = setInterval(function () {
  //   now = new Date().getTime();

  //   const distance = finalDate - now;

  //   const remainingMinutes = Math.floor(
  //     (distance % (1000 * 60 * 60)) / (1000 * 60)
  //   );
  //   const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   minutesSpan.textContent = remainingMinutes;
  //   seconds.textContent = remainingSeconds;

  //   if (distance < 2) {
  //     clearInterval(actualTime);
  //     alert("¡Take a break for 5 minutes!");
  //   }
  // }, 1000);
}



reset.addEventListener('click', () =>{

  clearInterval(actualTime);
  console.clear();
  minutes = 25;
  seconds = "00";
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("start").style.display = "inline-flex";
  document.getElementById("reset").style.display = "none";

});