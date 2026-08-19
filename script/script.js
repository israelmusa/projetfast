let a = document.querySelector("#a")
let b = document.querySelector("#b")
let c = document.querySelector("#c")
let d = document.querySelector("#d")
let e = document.querySelector("#e")
setTimeout(() => {
    a.classList.add("black")
    a.classList.toggle("animate-bounce")
}, 2000);
setTimeout(() => {
    b.classList.add("black")
    b.classList.toggle("animate-bounce")
}, 3000);
setTimeout(() => {
    c.classList.add("black")
    c.classList.toggle("animate-bounce")
}, 4000);
setTimeout(() => {
    d.classList.add("black")
    d.classList.toggle("animate-bounce")
}, 5000);
setTimeout(() => {
    e.classList.add("black")
    e.classList.toggle("animate-bounce")
}, 6000);
setTimeout(() => {
    window.location.href="/views/login.html"

}, 8000);

