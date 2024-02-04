let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapTimesList = document.getElementById('lap-times');

function updateTime() {
    const currentTime = Date.now();
    const diffTime = currentTime - startTime + elapsedTime;
    const formattedTime = new Date(diffTime).toISOString().substr(11, 8);
    display.textContent = formattedTime;
}

startBtn.addEventListener('click', function() {
    if (!isRunning) {
        startTime = Date.now();
        timer = setInterval(updateTime, 10);
        isRunning = true;
    }
});

pauseBtn.addEventListener('click', function() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime += Date.now() - startTime;
});

resetBtn.addEventListener('click', function() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = '00:00:00';
    lapTimesList.innerHTML = '';
});

lapBtn.addEventListener('click', function() {
    if (isRunning) {
        const lapTime = document.createElement('li');
        lapTime.textContent = display.textContent;
        lapTimesList.appendChild(lapTime);
    }
});