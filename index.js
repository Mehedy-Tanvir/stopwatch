let mili = 0;
let sec = 0;
let min = 0;
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const miliseconds = document.querySelector('#miliseconds');
const seconds = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes');
let interval;

start.addEventListener('click', () => {
    interval = setInterval(stopwatch, 10);

});
stop.addEventListener('click', () => {
    clearInterval(interval);
});
reset.addEventListener('click', () => {
    clearInterval(interval);
    mili = 0;
    sec = 0;
    min = 0;
    miliseconds.innerHTML = "0" + mili;
    seconds.innerHTML = "0" + sec;
    minutes.innerHTML = "0" + min;

})

function stopwatch() {
    mili++;
    if (mili < 10) {
        miliseconds.innerHTML = "0" + mili;
    } else if (mili < 100) {
        miliseconds.innerHTML = mili;
    } else if (mili > 99) {
        mili = 0;
        miliseconds.innerHTML = "0" + mili;

        sec++;
        if (sec < 10) {
            seconds.innerHTML = "0" + sec;
        } else if (sec < 60) {
            seconds.innerHTML = sec;
        } else if (sec > 59) {
            sec = 0;
            seconds.innerHTML = "0" + sec;
            min++;
            if (min < 10) {
                minutes.innerHTML = "0" + min;
            } else if (min < 60) {
                minutes.innerHTML = min;
            } else if (min > 59) {
                clearInterval(interval);
                mili = 0;
                sec = 0;
                min = 0;
                miliseconds.innerHTML = "0" + mili;
                seconds.innerHTML = "0" + sec;
                minutes.innerHTML = "0" + min;
            }


        }

    }
}