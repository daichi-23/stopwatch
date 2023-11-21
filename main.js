const time = document.getElementById("time");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("milliseconds");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let hours_n = hours.value;
let minutes_n = minutes.value;
let seconds_n = seconds.value;
let milliseconds_n = milliseconds.value;

milliseconds_n = 0;
seconds_n = 0;
minutes_n = 0;
hours_n = 0;

let stopWatch = () => {
    milliseconds_n++;
    if (milliseconds_n === 10) {
        seconds_n++;
        milliseconds_n = 0;
    }
    if (seconds_n === 60) {
        minutes_n++;
        seconds_n = 0;
    }
    if (minutes_n===60) {
        hours_n++;
        minutes_n = 0;
    }
    milliseconds.innerHTML = milliseconds_n;
    seconds.innerHTML = seconds_n;
    minutes.innerHTML = minutes_n;
    hours.innerHTML = hours_n;
}

let count;
function timeStart() {
    count = setInterval (stopWatch, 100);  
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
}
function timeStop() {
    clearInterval (count)
    start.disabled = false;
    stop.disabled = true;
}
function timeReset() {
    clearInterval (count)
    milliseconds.innerHTML = 0;
    seconds.innerHTML = 0;
    minutes.innerHTML = 0;
    hours.innerHTML = 0;
    milliseconds_n = 0;
    seconds_n = 0;
    minutes_n = 0;
    hours_n = 0;
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
}