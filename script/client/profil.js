let local = document.querySelector("#local")
let locale = document.querySelector("#locale")
let pays = document.querySelector("#pays")
let l = document.querySelector(".lll")
function where() {
   if (!navigator.geolocation) return console.log("gps non support");
   navigator.geolocation.getCurrentPosition(p => {
      const { latitude: lat, longitude: lon } = p.coords;
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1&accept-language=fr`)
         .then(r => r.json())
         .then(d => {
            const a = d.address || {}
            locale.textContent = "| " + (a.suburb || "non trouve")
            local.textContent = (a.city || "non trouve")
            console.log(a);
         })
   }, e => console.log(e.message)
   )
}
where()
let username = localStorage.getItem("username")
let numeros = localStorage.getItem("numeros")
let nam = document.querySelectorAll(".name")

nam.forEach(el => {
   el.textContent = username
})


let nume = document.querySelectorAll(".nume").forEach(el => {
   el.textContent = numeros
})
let som = document.querySelector("#som")
let paren = document.querySelector("#parent")
let cla = document.querySelector("#cla")
let sommb = localStorage.getItem("mode")
let lala = document.querySelectorAll(".lala")
let nav = document.querySelectorAll(".nav")
let ic = document.querySelector("#ic")
let ll = document.querySelector(".ll")
let lll = document.querySelector(".lll")
let body = document.body
function sombr() {
   if (sommb === "sombre") {
      som.style.display = "none"
      cla.style.display = "block"
      cla.classList.add("bobo")
      ic.style.fill = "#3B82F6"
      body.classList.add(sommb)
      lala.forEach(el => {
         el.classList.add(sommb)
         el.style.border = "1px solid gray"
      })
      nav.forEach(el => {
         el.classList.add("navid")
      })
      paren.classList.add("pprr")
      ll.style.fill = "#fff"
      lll.style.color = "white"
   }
}
sombr()
som.addEventListener("click", () => {
   localStorage.setItem("mode", "sombre")
   som.style.display = "none"
   cla.style.display = "block"
   ic.style.fill = "#3B82F6"
   cla.classList.add("bobo")
   body.classList.add("sombre")
   lala.forEach(el => {
      el.classList.add("sombre")
      el.style.border = "1px solid gray"
   })
   nav.forEach(el => {
      el.classList.add("navid")
   })
   paren.classList.add("pprr")
   ll.style.fill = "#fff"
   lll.style.color = "white"
})
cla.addEventListener("click", () => {
   localStorage.setItem("mode", "clair")
   cla.style.display = "none"
   som.style.display = "block"
   ic.style.fill = "black"
   paren.classList.remove("pprr")
   body.classList.remove("sombre")
   lala.forEach(el => {
      el.classList.remove("sombre")
      el.style.border = "none"
   })
   nav.forEach(el => {
      el.classList.remove("navid")
   })
   ll.style.fill = "#000"
   lll.style.color = "green"
})
let deco = document.querySelector("#deco")
let identite = JSON.parse(localStorage.getItem("identite")) || []
let numer = localStorage.getItem("numeros")
let sup = document.querySelector("#sup")
sup.addEventListener("click", () => {
   identite = identite.filter(el => el.numero !== numer)
   localStorage.setItem("identite", JSON.stringify(identite))
   window.location.href = "/views/login.html"
})
deco.addEventListener("click", () => {
   window.location.href = "/views/login.html"
})
let enregid = document.querySelector("#enregid")
let enregi = document.querySelector("#enregi")
let premier = document.querySelector("#premier")
let petit = document.querySelector("#petit")
let deux = document.querySelector(".deux")
let order = JSON.parse(localStorage.getItem("order")) || []
let tbo = document.querySelector(".tbo")
let info = document.querySelectorAll(".info")
let one = document.querySelector(".one")
function affiche(bond) {
   tbo.innerHTML = ""
   bond.forEach((el, index) => {
      tbo.innerHTML += `
         <tr class="ttr border-b-2 border-b-gray-300 cursor-pointer">
            <td class="f py-2 px-10" onclick="arecu(order[${index}].recu)">${el.order}</td>
            <td class="ff py-2 px-10" onclick="arecu(order[${index}].recu)">${el.date}</td>
            <td class="fff py-2 px-10" onclick="arecu(order[${index}].recu)">${el.somme}$</td>
            <td class="ffff py-2 px-10" onclick="arecu(order[${index}].recu)">${el.payer}</td>
            <td class="py-2 px-10" onclick="arecu(order[${index}].recu)">${el.statut}</td>
         </tr>
         `
   });

}
let fi = order.filter(el => el.statut === "livre")
affiche(fi)
function arecu(re) {
   let modal = document.querySelector("#modal")
   let mocont = document.querySelector("#modcont")
   mocont.innerHTML = ""
   re.forEach(item => {
      mocont.innerHTML += `
        <div class="border-b py-2 flex">
            <div class="w-[30%]">
                 <img src="${item.photo}" alt="" class="w-[85%] h-[16vh] rounded-lg">
            </div>
            <div>
               <p class="font-bold">${item.nom}</p>
               <p>Maison:${item.maison}</p>
               <p>Quantite :${item.quantite}</p>
               <p>Prix total: ${item.soustot}</p>
            </div>

        </div>
      `

   })
   modal.classList.remove("hidden")
}
document.querySelector("#closemodal").addEventListener("click", () => {
   document.querySelector("#modal").classList.add("hidden")
})
let refus = document.querySelector("#refus")
enregid.addEventListener("click", () => {
   premier.style.display = "none"
   deux.style.display = "block"
   petit.style.height = "80vh"
})
refus.addEventListener("click", () => {
   premier.style.display = "block"
   deux.style.display = "none"
   petit.style.height = "99vh"
})
let num = document.querySelector(".num").textContent = numeros
let nom = document.querySelector(".nom").textContent = username
let reff = document.querySelector("#reff")
let refff = document.querySelector("#refff")
let props = document.querySelector(".prop")
enregi.addEventListener("click", () => {
   info.forEach(el => {
      el.style.display = "none"
   })
   one.style.display = "block"
   petit.style.height = "81vh"
})
reff.addEventListener("click", () => {
   info.forEach(el => {
      el.style.display = "flex"
   })
   one.style.display = "none"
   petit.style.height = "99vh"
})
refff.addEventListener("click", () => {
   props.style.display = "none"

   premier.style.display = "block"
   petit.style.height = "90vh"

})

let cord = document.querySelector(".cord")
let coo = document.querySelector("#coo")
let closemo = document.querySelector("#closemo")
cord.addEventListener("click", () => {
   coo.style.display = "flex"
})
closemo.addEventListener("click", () => {
   coo.style.display = "none"
})
let pame = document.querySelectorAll(".pame")
let pume = document.querySelectorAll(".pume")
let inppas = document.querySelector("#password")
let inpnu = document.querySelector("#number")
let inpna = document.querySelector("#name")
function nnn() {

   let personne = identite.find(el => el.numero === numer)
   if (personne) {
      personne.nom = inpna.value
      personne.numero = inpnu.value
      personne.password = inppas.value

      localStorage.setItem("identite", JSON.stringify(identite))
      localStorage.setItem("numeros", inpnu.value)
      localStorage.setItem("username", inpna.value)
      pame.forEach(el => {
         el.textContent = inpna.value
      })
      pume.forEach(el => {
         el.textContent = inpnu.value
      })

   }

}
let bntsi = document.querySelector("#bntsi").addEventListener("click", () => {
   nnn()
   coo.style.display = "none"
})
let propo = document.querySelector(".propo")
let prop = document.querySelector(".prop")
propo.addEventListener("click", () => {
   prop.style.display = "block"
   premier.style.display = "none"
   deux.style.display = "none"
   petit.style.height = "80vh"
})


















