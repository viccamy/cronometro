const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');
const toggleThemeBtn = document.querySelector('.toggle-theme-btn');

let time = 0;
let interval;

function startTimer() {
  interval = setInterval(() => {
    time++;
    displayTime();
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();
  time = 0;
  displayTime();
}

function displayTime() {
  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  timer.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  startBtn.classList.toggle('dark');
  stopBtn.classList.toggle('dark');
  resetBtn.classList.toggle('dark');
  toggleThemeBtn.classList.toggle('dark');
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
toggleThemeBtn.addEventListener('click', toggleTheme);
