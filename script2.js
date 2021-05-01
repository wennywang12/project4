// the audio icon, turn on/off the music

let icon1 = document.querySelector('.icon1');
let flag1 = true;
let src = './music/';
let songs = ['4.mp3', '5.mp3', '6.mp3', '7.mp3', '8.mp3', '9.mp3', '10.mp3', '11.mp3', '12.mp3'];
let audio = new Audio(src + songs[parseInt(Math.random() * songs.length)]);

icon1.addEventListener('click', function () {
    if (flag1) {
        this.src = './image/mu.svg';
        flag1 = false;
        audio.play(); 
    } else {
        this.src = './image/m.svg';
        flag1 = true;
        audio.pause(); 
    }
})

// the sunsetmode turn on/off the circle

let sunset = document.querySelector('h2');
let circle = document.querySelector('.circle');
let flag2 = true;
sunset.addEventListener('click', function () {
    clearInterval(timer);
    if (flag2) {
        circle.style.display = 'block';
        flag2 = false;
    } else {
        circle.style.display = 'none';
        flag2 = true;
        twinkle(s);
    }
})

// the flashing,twinkle effect

let timer;
let mask = document.querySelector('.mask');
let str = sessionStorage.getItem('array'); // get the cookie
let arr = str.split(',');  // seperate 

function twinkle(val) {
    clearInterval(timer); // clear the timer
    mask.style.background = arr[0];
    let i = 1;
    timer = setInterval(() => {
        mask.style.background = arr[i];
        i = i + 1;
        if (i >= arr.length) {
            i = 0;
        }
    }, val);
}

// setInterval(function() {
//     console.log(1);
// },1000)

// turn back to the homepage

let go = document.querySelector('.icon2');

go.addEventListener('click', function () {
    window.history.go(-1);
});

// the progression, control the speed

let flag = false;
let probnt = document.querySelector("#probnt");
let progress = document.querySelector("#progress");
let body = document.body;
let offsetX;
let s = 1000;

probnt.onmousedown = function (e) {
    flag = true;
    offsetX = e.offsetX;
    console.log(offsetX);
};

body.onmousemove = function (e) {
    if (flag) {
        X = e.clientX;
        console.log(X);
        let cl = X - offsetX;
        const left = progress.getBoundingClientRect().left;
        const width = progress.getBoundingClientRect().width;
        let ml = cl - left;
        if (ml <= 0) {
            probnt.style.marginLeft = 22 + "px";
        } else if (ml >= width - 12) {
            probnt.style.marginLeft = width + 6 + "px";
        } else {
            probnt.style.marginLeft = 22 + ml + "px";
        }
        progress.value = ((X - left) / (width - 6)) * 100;
        s = 2000 - Math.floor(progress.value) * 20;
        if (s <= 0) {
            s = 10;
        }
        twinkle(s);
    }
};

body.onmouseup = function () {
    flag = false;
};


twinkle(s);