let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let inter;
let counter = 0;

start.addEventListener('click', () => {
    clearInterval(inter);
    inter = setInterval(() => {
        counter++;
        sec.innerText = String(counter % 60).padStart(2, '0');
        min.innerText = String(Math.floor(counter / 60) % 60).padStart(2, '0');
        hour.innerText = String(Math.floor(counter / 3600)).padStart(2, '0');
    }, 1000);
    start.style.backgroundColor = 'green'
    start.style.transition = '0.4s'
    if (start.style.backgroundColor = 'green' == 'green') {
        stop.style.backgroundColor = 'coral'
    }
});         
stop.addEventListener('click', () => {
    clearInterval(inter);
    console.log("Stopped");
    stop.style.transition = '0.4s'
    start.style.backgroundColor = 'coral'
    stop.style.backgroundColor = 'red'

});