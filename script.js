let items = document.querySelector('.items');
let divs = items.querySelectorAll('div'); // get all the divs from the items
let start = document.querySelector('.start');
let arr = [];

divs.forEach((value) => {
    let flag = true; // an on-off
    value.addEventListener('click', function () {

        if (flag) {  
            this.style.background = this.children[0].getAttribute("index"); //index is set in the html,then get the color
            this.style.borderColor = this.children[0].getAttribute("index");
            flag = false;
            arr.push(this.children[0].getAttribute("index"));
        } else {
            this.style.background = '#fff';
            this.style.borderColor = '#333';
            flag = true;
            arr.splice(arr.indexOf(this.children[0].getAttribute("index")),1);
        }
        console.log(arr);
    })
});

start.addEventListener('click', function () {
    if (arr.length < 2) {
        console.log('select at least two color');
    } else {
        // sessionStorage.clear();
        sessionStorage.setItem('array', arr);   // sessionStorage API
        window.location.href="index2.html"; //turn into the color page
    }
})