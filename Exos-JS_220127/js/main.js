let idstart = document.getElementById('str');
let idstop = document.getElementById('top');
let idreset = document.getElementById('res');
let ms = 0;
let sec = 0;
let min = 0;
let hrs = 0;
let interval = 100;
let chronometre = document.getElementById('chrono');


idstart.addEventListener("click", start);
idreset.addEventListener("click", reset);
idstop.addEventListener("click", stop);

function update_chrono(){
    ms += interval;
    if (ms >= 1000){
        ms = 0;
        sec ++;
        if (sec >= 60){
            sec = 0;
            min ++;
            if (min >= 60){
                min = 0;
                hrs++;
            }
        }
    }
    chronometre.innerHTML = hrs + 'h :' + min + 'min :' + sec + 's :' + ms + 'ms';  
}


function start(){
    refresh = setInterval(update_chrono, interval);
}

function reset(){
    hrs = 0;
    min = 0;
    sec = 0;
    ms = 0;
    chronometre.innerHTML = 0 + 'h :' + 0 + 'min :' + 0 + 's :' + 0 + 'ms';
}

function stop(){
    clearInterval(refresh);
}