const workTitle = document.querySelector('#work');
const breakTitle = document.querySelector('#break');
const resetBtn = document.querySelector('#reset');
const startBtn = document.querySelector('#start');
const displayMinutes = document.querySelector('#minutes');
const displaySeconds = document.querySelector('#seconds');

const workTime = 25;
const breakTime = 5;

let seconds = '00';
let intervalID;

window.onload = () => {
  displayMinutes.innerHTML = workTime;
  displaySeconds.innerHTML = seconds;
  workTitle.classList.add('active');
};

startBtn.addEventListener('click', start);

resetBtn.addEventListener('click', reset);

function start() {
  startBtn.style.display = 'none';
  resetBtn.style.display = 'block';

  seconds = 59;
  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;

  breakCount = 0;

  let timeFunction = () => {
    displayMinutes.innerHTML = workMinutes;
    displaySeconds.innerHTML = seconds;
    seconds -= 1;

    if (seconds === 0) {
      workMinutes -= 1;
      if (workMinutes === -1) {
        if (breakCount % 2 === 0) {
          workMinutes = breakMinutes;
          breakCount++;
          workTitle.classList.toggle('active');
          breakTitle.classList.toggle('active');
        } else {
          workMinutes = workTime;
          breakCount++;
          workTitle.classList.toggle('active');
          breakTitle.classList.toggle('active');
        }
      }
      seconds = 59;
    }
  };
  intervalID = setInterval(timeFunction, 1000);
}

function reset() {
  clearInterval(intervalID);
  startBtn.style.display = 'block';
  resetBtn.style.display = 'none';
  displayMinutes.innerHTML = workTime;
  displaySeconds.innerHTML = '00';
}
