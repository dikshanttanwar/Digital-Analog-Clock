let hrs = document.querySelector(".hrs")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")

function clockTime(){

    let time = new Date();
    let hr = time.getHours();
    let mm = time.getMinutes();
    let sc = time.getSeconds();

    let hRotate = 30 * hr;
    let mRotate = 6*mm;
    let sRotate = 6*sc;
    console.log(sc)
    console.log(hr)
    hrs.style.transform = `rotate(${hRotate}deg)`
    min.style.transform = `rotate(${mRotate}deg)`
    sec.style.transform = `rotate(${sRotate}deg)`
}

setInterval(() => {
    clockTime();
}, 1000);