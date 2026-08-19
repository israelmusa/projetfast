let name = JSON.parse(localStorage.getItem("identite")) || []
let pnam = document.querySelector(".pnam")
let pbien = document.querySelector(".pbien")
let username = localStorage.getItem("username")
let statut = localStorage.getItem("statut")
if (username && statut === "nouveau") {
   pnam.textContent = username
   pbien.textContent = "Bienvenue !"
} else {
   pnam.textContent = username
   pbien.textContent = "bon retour ! "
}
import { produit } from "./table.js"
let produits = document.querySelector("#produits")
function cliquerr(bond) {
   produits.innerHTML = ""
   bond.forEach(el => {
      produits.innerHTML +=
         `<div class="fene" >
       <img src="${el.photo}" alt="${el.nom}" id="${el.article}" class="pimg" >
       <div class="elp">
            <P class="pnom">${el.nom}</p>
            <p class="pprix">${el.prix}$ | ${el.quantite}</p>
            <P class="partic">${el.article}</p>
            <P class="pdure">time: ${el.dure}</p>
            <div class="espace" data-prod="1">
                <span id="start1" class="start" >&#9733;</span>
                <span id="start2" class="start" >&#9733;</span>
                <span id="start3" class="start" >&#9733;</span>
                <span id="start4" class="start" >&#9733;</span>
                <span id="start5" class="start" >&#9733;</span> 
            </div>
            <button type="submit" id="${el.article}" class="bplus">
            <span class="plus">+</span>Ajouter</button>    
       </div>
    </div>`
   });
   fenetre()
   affichep()
}
cliquerr(produit)
function somba() {
   let sommb = localStorage.getItem("mode")
   let lala = document.querySelectorAll(".lala")
   let nav = document.querySelector(".nav")
   let dodo = document.querySelector(".dodo")
   let fen = document.querySelectorAll(".fene")
   let papa = document.querySelector(".papa")
   let ic = document.querySelector("#ic")
   let body = document.body
   if (sommb === "sombre") {
      body.classList.add(sommb)
      ic.style.fill = "#3B82F6"
      if (window.innerWidth <= 768) {
         papa.style.background = "#1d1d1d"
      }
      fen.forEach(el => {
         el.style.background = "#1d1d1d"
      }
      )
      lala.forEach(el => {
         el.classList.add(sommb)
         el.style.border = "1px solid gray"
      })
      nav.style.background = "#1d1d1d"

   }
}
somba()
function affichep() {
   const bbplus = document.querySelectorAll(".bplus")
   let envv = document.querySelector("#envv")
   bbplus.forEach((item) => {
      item.addEventListener("click", () => {
         const pro = item.getAttribute("id")
         const pr = produit.find(p => p.article == pro)
         if (pr) {
            let recup = JSON.parse(localStorage.getItem("marchandise")) || []
            recup.push(pr)
            localStorage.setItem("marchandise", JSON.stringify(recup))
            envv.style.display = "block"
            setTimeout(() => {
               envv.style.display = "none"
            }, 1000);
         } else {
            console.error("produit nontouve pour l'id:", pr);

         }

      })
   })
}
affichep()
function fenetre() {
   const images = document.querySelectorAll(".pimg")
   images.forEach((item) => {
      item.addEventListener("click", () => {
         const produitid = item.getAttribute("id")
         const prod = produit.find(p => p.article == produitid)
         ouvrierModal(prod)
         supprimer()
      })
   })
}
let mdimage=document.getElementById("mdimage")
let mdtitle=document.getElementById("mdtitle")
let mdprice=document.getElementById("mdprice")
let mdmaison=document.getElementById("mdmaison")
let mddescr=document.getElementById("mddescr")
function ouvrierModal(produit) {
   mdimage.src = produit.photo
   mdimage.alt = produit.nom
   mdtitle.textContent ="Nom: " + produit.nom
   mdprice.textContent = "Prix: " + produit.prix
   mdmaison.textContent="Maison: " + produit.maison
   mddescr.textContent=produit.description
   document.getElementById("feneprod").style.display = "flex"
}

function supprimer() {
   let clause = document.getElementById("clause")
   clause.addEventListener('click', () => {
      document.getElementById("feneprod").style.display = "none"
   })
}


let bntp1 = document.querySelector("#bntp1")
let bntp2 = document.querySelector("#bntp2")
let bntp3 = document.querySelector("#bntp3")
let bntp4 = document.querySelector("#bntp4")
let bntp5 = document.querySelector("#bntp5")
let bntp6 = document.querySelector("#bntp6")
let bntp7 = document.querySelector("#bntp7")
let bntp8 = document.querySelector("#bntp8")
bntp1.addEventListener("click", () => {
   produits.innerHTML = ""
   let a = produit.filter(el => el.nom.startsWith("Plat"))
   cliquerr(a)
   somba()
})
bntp2.addEventListener("click", () => {
   produits.innerHTML = ""
   let a = produit.filter(el => el.nom.startsWith("Phone"))
   cliquerr(a)
   somba()
})
bntp3.addEventListener("click", () => {
   produits.innerHTML = ""
   let b = ["T-shirt", "Pantalon", "Chemise", "Robe women","Pantalon cul"]
   let a = produit.filter(el => b.includes(el.nom))
   cliquerr(a)
   somba()
})
bntp4.addEventListener("click", () => {
   produits.innerHTML = ""
   let a = produit.filter(el => el.nom.startsWith("kinine"))
   cliquerr(a)
   somba()
})
bntp5.addEventListener("click", () => {
   produits.innerHTML = ""
   let a = produit.filter(el => el.nom.startsWith("Montre"))
   cliquerr(a)
   somba()
})
bntp6.addEventListener("click", () => {
   produits.innerHTML = ""
   cliquerr(produit)
   somba()
})
let search = document.querySelector("#search")
search.addEventListener("input", () => {
   let inputs = search.value.toLowerCase()
   let resultat = produit.filter(el => el.nom.toLowerCase().includes(inputs))
   if (resultat.length > 0) {
      cliquerr(resultat)
      somba()
   } else (
      produits.innerHTML = `<p class="pppp">aucun element est trouve</p>`
   )

})
cliquerr(produit)
let local = document.querySelector("#local")
let locale = document.querySelector("#locale")
let pays = document.querySelector("#pays")
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
            console.log(`${lat},${lon}`);
         })
   }, e => console.log(e.message)
   )
}
where()
somba()

// function etoile(item) {
//    let tous = [
//       document.querySelector("#start1"),
//       document.querySelector("#start2"),
//       document.querySelector("#start3"),
//       document.querySelector("#start4"),
//       document.querySelector("#start5")
//    ]
//    tous.forEach(el => {
//       const produitidd = el.id

//    })
//    const startss = document.querySelectorAll(".start")
//    const keyetoile = `note_prod_${produitidd}`
//    const notesv = localStorage.getItem(keyetoile)
//    if (notesv) {
//       colorer(Number(notesv))
//    }
//    startss.forEach((start, index) => {
//       start.addEventListener('click', () => {
//          const note = index + 1
//          localStorage.setItem(keyetoile, note)
//          colorer(note)
//       })
//    })
//    function colorer(note) {
//       startss.forEach((start, index) => {
//          start.style.color = index < note ? "yellow" : ""
//       })

//    }
// }




// let tous = ["#start1", "#start2", "#start3", "#start4", "#start5"]
// tous.forEach(el => {
//    let start = produits.querySelectorAll(el)
//    start.forEach(item => {
//       item.addEventListener("click", () => {
//          item.style.color = "yellow"
//       })
//    });

// });

