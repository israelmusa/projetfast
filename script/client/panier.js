let local = document.querySelector("#local")
let locale = document.querySelector("#locale")
let pays = document.querySelector("#pays")
let l = document.querySelector(".lll")
let addr = document.querySelector(".addr")
let vil = document.querySelector("#vil")
let qua = document.querySelector("#qua")
let vq = document.querySelector("#vq")
let change = document.querySelector(".change")
let chan = document.querySelector("#chan")
let hhhh = document.querySelector("#hhh") 
let hhhhh = document.querySelector("#hhhh")
let markos=document.querySelector(".markos")
change.addEventListener("click", () => {
   hhhh.style.display = "none"
   hhhhh.style.display = "none"
   chan.style.display = "flex"
})
markos.addEventListener("click", () => {
   hhhh.style.display = "flex"
   hhhhh.style.display = "block"
   chan.style.display = "none"
})
vq.addEventListener("click", () => {
   l.textContent = (qua.value + " | " + vil.value)
   addr.textContent = (qua.value + " | " + vil.value)
   hhhh.style.display = "flex"
   hhhhh.style.display = "block"
   chan.style.display = "none"

})
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
            l.textContent = (a.suburb + " | " + a.city || "non trouve")
            addr.textContent = (a.suburb + " | " + a.city || "non trouve")
            console.log(`${lat},${lon}`);
         })
   }, e => console.log(e.message)
   )
}
where()
let recup = JSON.parse(localStorage.getItem("marchandise"))
let produits = document.querySelector("#produits")
let nn = document.querySelector(".nom")
let acc = document.querySelector(".accc")
function affiche() {
   produits.innerHTML = ""
   nn.textContent = recup.length
   recup.forEach((el, index) => {
      produits.innerHTML += `
       <div class="bottom" >
         <img src="${el.photo}" alt="${el.nom}" class="paimg">
         <div class="boto ">
            <div class="w-[35%]">
               <p class="font-bold text-lg">${el.nom}</p>
               <p>${el.maison}</p>
               <p class="val text-green-700 font-bold text-lg">${el.prix}$</p>
            </div>
            <div class="parent">
               <div class="parc">
                  <button class="sous">-</button>
                  <p class="quan font-bold">${el.quantite}</p>
                  <button class="addi">+</button>
               </div>
               <div>
                  <p class="fois" onclick="sup(${index})">&times;</p>
                  <p class="due font-bold">${el.prix}$</p>
               </div>
            </div>
         </div>
       </div>
       `
      let addi = document.querySelectorAll(".addi")
      let due = document.querySelectorAll(".due")
      let prix = recup.map(el => el.prix) 
      let plus = []
      let sous = document.querySelectorAll(".sous")
      let quan = document.querySelectorAll(".quan")
      let subm = document.querySelector("#subm")
      let totaux = document.querySelector(".totaux")
      let tot = document.querySelector("#tot")
      let dollard = document.querySelector(".dollard").textContent = 1

      quan.forEach((el, i) => {
         plus[i] = 1
      });
      addi.forEach((el, i) => {
         el.addEventListener("click", () => {
            plus[i]++
            quan[i].textContent = plus[i]
            due[i].textContent = `${(prix[i] * plus[i])}$`
         })
      })
      sous.forEach((el, i) => {
         el.addEventListener("click", () => {
            if (plus[i] > 1) {
               plus[i]--
               quan[i].textContent = plus[i]
               due[i].textContent = `${(prix[i] * plus[i])}$`
            }
         })
      })
      subm.addEventListener("click", () => {
         let commande = recup.map((el, i) => {
            return {
               nom: el.nom,
               maison: el.maison,
               photo: el.photo,
               prix: el.prix,
               quantite: plus[i],
               soustot: prix[i] * plus[i]
            }
         })
         let redec = commande.reduce((acc, el) => acc + el.soustot, 0)
         let total = document.querySelector(".total").textContent = redec
         let somme = total + dollard
         acc.textContent = somme + "$"
         totaux.textContent = somme + "$"
         tot.textContent = somme + "$"
         localStorage.setItem("commande", JSON.stringify(commande))
         localStorage.setItem("somme", somme)
      })
      function supprimer() {
         let vide = document.querySelector("#vide")
         vide.addEventListener("click", () => {
            produits.innerHTML = ""
            localStorage.removeItem("marchandise")
            nn.textContent = 0
            acc.textContent = 0
            document.querySelector(".total").textContent = 0

         })

      }
      supprimer()
   });
}
if (recup) {
   affiche()
}

function sup(index) {
   recup.splice(index, 1)
   localStorage.setItem("marchandise", JSON.stringify(recup))
   affiche()
}
let sp = document.querySelector(".sp")
let pm = document.querySelector(".pm")
let personne = document.querySelector("#personne")
let machine = document.querySelector("#machine")
let refu = document.querySelector("#refus")
let sm = document.querySelector(".sm")
let reff = document.querySelector("#reff")
function inp() {
   if (personne.checked) {
      sp.style.display = "flex"
   } else if (machine.checked) {
      sm.style.display = "flex"
   }
}
pm.addEventListener("click", () => {
   inp()
})
refu.addEventListener('click', () => {
   sp.style.display = "none"
})
reff.addEventListener("click", () => {
   sm.style.display = "none"
})
let suite=document.querySelector(".suite")
suite.addEventListener("click",()=>{
   window.location.href="/views/client/order.html"
})
let envoie = document.querySelector("#envoie")
let env = document.querySelector("#env")

let dd = "#ORD" + (Math.floor(Math.random() * 900000) + 100000)
let data = new Date()
let jour = data.getDate()
let mois = data.getMonth()
let annee = data.getFullYear()
let order = JSON.parse(localStorage.getItem("order")) || []
envoie.addEventListener("click", () => {
   env.style.display = "block"
   setTimeout(() => {
      env.style.display = "none"
   }, 1000);
   let som = localStorage.getItem("somme")
   let comm = JSON.parse(localStorage.getItem("commande"))
   order.push({
      recu: comm,
      payer: "Cache",
      order: dd,
      statut: "en preparation",
      date: `${jour}/${mois}/${annee}`,
      somme: som
   })
   localStorage.setItem("order", JSON.stringify(order)) || []
   produits.innerHTML = ""
   localStorage.removeItem("marchandise")
   nn.textContent = 0
   acc.textContent = 0
   document.querySelector(".total").textContent = 0
})

let envi = document.querySelector("#envi")
let envv = document.querySelector("#envv")
let telv = document.querySelector("#telv")
let err = document.querySelector("#err")
let errr = document.querySelector("#errr")
function nenvi() {
   if (telv.value === "") {
      err.style.display = "flex"
      setTimeout(() => {
         err.style.display = "none"
      }, 2000);
      telv.style.outline = "1px solid red"
      setTimeout(() => {
         telv.style.outline = "1px solid"
      }, 2000);
   } else {
      if (Number(telv.value)) {
         envv.style.display = "block"
         setTimeout(() => {
            envv.style.display = "none"
         }, 4000);
      } else {
         telv.style.outline = "1px solid red"
         setTimeout(() => {
            telv.style.outline = "1px solid"
         }, 2000);
         errr.style.display = "flex"
         setTimeout(() => {
            errr.style.display = "none"
         }, 2000);
      }
   }
}
let sommb = localStorage.getItem("mode")
let lala = document.querySelectorAll(".lala")
let nav = document.querySelectorAll(".nav")
let ic=document.querySelector("#ic")
let body = document.body
if (sommb === "sombre") {
   body.classList.add(sommb)
   ic.style.fill="#3B82F6"
   lala.forEach(el=>{
      el.classList.add(sommb)
      el.style.border= "1px solid gray"
   })
   nav.forEach(el=>{
      el.classList.add("navid")
   })
}


envi.addEventListener("click", () => {
   nenvi()
   order.push({
      recu: comm,
      payer: "Mobile",
      order: dd,
      statut: "en preparation",
      date: `${jour}/${mois}/${annee}`,
      somme: som
   })
   localStorage.setItem("order", JSON.stringify(order)) || []
   produits.innerHTML = ""
   localStorage.removeItem("marchandise")
   nn.textContent = 0
   acc.textContent = 0
   document.querySelector(".total").textContent = 0
})


