let inpnu = document.querySelector("#number")
let inppas = document.querySelector("#password")
let bntsi = document.querySelector("#bntsi")
let paraitre = document.querySelector("#parait")
function check() {
    if (inppas.value === "12l3v45") {
        window.location.href = "/views/livreur/acceuil.html"
    } else if (inppas.value === "12a3c45") {
        window.location.href = "/views/acheteur/acceuil.html"
    } else if (inppas.value === "12a3d45") {
        window.location.href = "/views/admi/acceuil.html"
    } else {
        window.location.href = "/views/client/acceuil.html"
    }

}

let user = JSON.parse(localStorage.getItem("identite")) || []
function inp() {
    let trouve = user.find(el =>
        el.numero === inpnu.value &&
        el.password === inppas.value)
    if (trouve) {
        check()
        localStorage.setItem("username", trouve.nom)
        localStorage.setItem("statut", "ancien")
        localStorage.setItem("numeros", inpnu.value)

    } else {
        paraitre.style.display = "block"
        inpnu.style.border = "1px solid red"
        inppas.style.border = "1px solid red"
        setTimeout(() => {
            paraitre.style.display = "none"
            inpnu.style.border = "1px solid green"
            inppas.style.border = "1px solid green"
        }, 4000)
    }
    inpnu.value = ""
    inppas.value = ""
}
bntsi.addEventListener("click", () => {
    inp()

})
let sommb = localStorage.getItem("mode")
let lala = document.querySelectorAll(".lala")
let ll=document.querySelector(".ll")
let lll=document.querySelectorAll(".lll")
let sect=document.querySelector(".sect")
let body = document.body
if (sommb === "sombre") {
    body.classList.add(sommb)
    ll.style.fill = "#fff"
    lll.forEach(el=>{
        el.style.color = "white"})
    sect.classList.add(sommb)
    lala.forEach(el => {
        el.classList.add(sommb)
        el.style.border = "1px solid gray"
    })
}