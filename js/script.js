let hours = 0;
let minutes = 0;
let seconds = 0;
let txtPause = document.getElementById("txt-pause");

let interval;

function timerSeconds() {
  interval = setInterval(start, 1000);
}

function start() {
  txtPause.classList.add("hide");
  //seconds format//

  seconds++;

  if (seconds < 10) {
    document.getElementById("seconds").innerHTML = "0" + seconds;
  } else document.getElementById("seconds").innerHTML = seconds;

  if (seconds == 60) {
    minutes++;
    seconds = 00;
  }

  // minutes format//

  if (minutes < 10) {
    document.getElementById("minutes").innerHTML = "0" + minutes;
  } else document.getElementById("minutes").innerHTML = minutes;

  if (minutes == 60) {
    hours++;
    minutes = 00;
  }

  //Hours format//

  if (hours < 10) {
    document.getElementById("hours").innerHTML = "0" + hours;
  } else {
    document.getElementById("hours").innerHTML = hours;
  }

  if (hours == 24) {
    hours = 00;
  }
}

function timerPause() {
  clearInterval(interval);
  txtPause.innerHTML = "Cronômetro Pausado!";
  txtPause.classList.remove("hide");
}

function timerStop() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("hours").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  txtPause.innerHTML = "Cronômetro Parado!";
  txtPause.classList.remove("hide");
}
