const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#sec");
const run = document.querySelector("#run");
const pause = document.querySelector("#pause");

var hourNumber = hour.innerHTML;
var minNumber = minute.innerHTML;
var secNumber = second.innerHTML;
var myWindow=[];

var secondTot = hourNumber*60.0*60 + minNumber*60.0 + secNumber*1.0;
console.log(hourNumber);
console.log(minNumber);
console.log(secNumber);
console.log(secondTot);


var interval;
var timerRunning = false;

function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

function runTimer(){
    

    secondTot--;
    hourNumber = Math.floor(secondTot/60.0/60);
    minNumber = Math.floor(secondTot/60.0-hourNumber*60.0);
    secNumber = Math.floor(secondTot-minNumber*60.0-hourNumber*60.0*60.0);
    

    if(secondTot==0){
        stop();
    }
    hour.innerHTML = leadingZero(hourNumber);
    minute.innerHTML = leadingZero(minNumber);
    second.innerHTML = leadingZero(secNumber);
}

function start() {
    if (!timerRunning && secondTot!=0){
        timerRunning = true;
        interval = setInterval(runTimer, 1000);
    }
}

function stop(){
    if(timerRunning){
        timerRunning = false;
        clearInterval(interval);
        interval=null;
        for (i=0; i<myWindow.length;i++){
            myWindow[i].close();
        }
        
    }
}

function openWindow(){
    myWindow.push(window.open('https://key-drop.com/en/Daily_free', '_blank'));
}


run.addEventListener("click", start, false);
run.addEventListener("click", openWindow, false);
pause.addEventListener("click",stop,false);