const display = document.getElementById('display');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
        let startBtn = document.getElementById('startBtn');
        startBtn.textContent = "Start";

    }
}
function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        let startBtn = document.getElementById('startBtn');
        startBtn.textContent = "Continue";
    }

}
function restart() {
    if (!isRunning) {
        display.textContent = '00:00:00:00';
        startTime = 0;
        timer = null;
        elapsedTime = 0;
        let startBtn = document.getElementById('startBtn');
        startBtn.textContent = "Start";
    } else {
        stop();
        display.textContent = '00:00:00:00';
        startTime = 0;
        timer = null;
        elapsedTime = 0;
        let startBtn = document.getElementById('startBtn');
        startBtn.textContent = "Start";
    }

}
function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milisec = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milisec = String(milisec).padStart(2, "0");


    display.textContent = `${hours}:${minutes}:${seconds}:${milisec}`;


}