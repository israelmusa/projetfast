let inpna = document.querySelector("#name")
let inpnu = document.querySelector("#number")
let inppas = document.querySelector("#password")
let bntsi = document.querySelector("#bntsi")
let paraitre = document.querySelector("#parait")
let inpt = document.querySelectorAll(".ipnt")
let retu = document.querySelector("#retu")
retu.addEventListener("click", () => {
    window.location.href = "/views/login.html"
})
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
let i=0

function inp() {
    let identite = JSON.parse(localStorage.getItem("identite")) || []
    if (inpna.value && inpnu.value && inppas.value) {
        localStorage.setItem("username", inpna.value)
        localStorage.setItem("numeros", inpnu.value) 
        i++
        identite.push({
            nom: inpna.value,
            numero: inpnu.value,
            password: inppas.value,
            id:i
        })
        localStorage.setItem("identite", JSON.stringify(identite))
        localStorage.setItem("statut", "nouveau")
        check()
        inpna.value = ""
        inpnu.value = ""
        inppas.value = ""
    } else {
        paraitre.style.display = "block"
        inpna.style.border = "1px solid red"
        inpnu.style.border = "1px solid red"
        inppas.style.border = "1px solid red"
        setTimeout(() => {
            paraitre.style.display = "none"
            inpna.style.border = "1px solid green"
            inpnu.style.border = "1px solid green"
            inppas.style.border = "1px solid green"
        }, 4000)

    }


}

bntsi.addEventListener("click", () => {
    inp()
})
let sommb = localStorage.getItem("mode")
let lala = document.querySelectorAll(".lala")
let ll=document.querySelectorAll(".ll")
let lll=document.querySelectorAll(".lll")
let sect=document.querySelector(".sect")
let body = document.body
if (sommb === "sombre") {
    body.classList.add(sommb)
    ll.forEach(el=>{
        el.style.fill = "#fff"})
    lll.forEach(el=>{
        el.style.color = "white"})
    sect.classList.add(sommb)
    lala.forEach(el => {
        el.classList.add(sommb)
        el.style.border = "1px solid gray"
    })
}




























