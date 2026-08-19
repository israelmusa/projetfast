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
let order = JSON.parse(localStorage.getItem("order")) || []
let tbo = document.querySelector(".tbo")
function affiche(bond) {
   tbo.innerHTML = ""
   bond.forEach((el, index) => {
      tbo.innerHTML += `
         <tr class="ttr border-b-2 border-b-gray-300 cursor-pointer">
            <td class="f py-2 px-4" onclick="arecu(order[${index}].recu)">${el.order}</td>
            <td class="ff py-2 px-4" onclick="arecu(order[${index}].recu)">${el.date}</td>
            <td class="fff py-2 px-4" onclick="arecu(order[${index}].recu)">${el.somme}$</td>
            <td class="ffff py-2 px-4" onclick="arecu(order[${index}].recu)">${el.payer}</td>
            <td class="py-2 px-4" onclick="arecu(order[${index}].recu)">${el.statut}</td>
            <td id="${index}" class="fsui py-2 px-4 text-green-700 font-bold cursor-pointer" onclick="suivre(${index})">Suivre</td>
            <td class="fffffff py-2 px-4 "><span class="spa text-lg text-green-700">recommande</span></td>
            <td id="${index}" class="lolo ppp py-2 px-4"><span class="span" onclick="foid(${index})">&times;</span></td>
         </tr>
         `
   });
}
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
affiche(order)
document.querySelectorAll(".spa").forEach((el,index)=>{
   el.addEventListener("click",()=>{
   ppp(index)   
   
   })
})
let recup=JSON.parse(localStorage.getItem("marchandise")) || []
function ppp(index) {
   let a=order[index]    
   recup.push(...a.recu)
   localStorage.setItem("marchandise",JSON.stringify(recup))
}

let plas=parseInt(localStorage.getItem("plas"))  || 0
document.querySelector("#chiffre").textContent=plas
function foid(index) {
    plas++
   let a=plas
   localStorage.setItem("plas",a)
   document.querySelector("#chiffre").textContent=a   
   let ppp=document.querySelectorAll(".ppp").forEach(el=>{
   el.addEventListener("click",()=>{
      const l=el.getAttribute('id')
      document.querySelectorAll(".fsui").forEach(item=>{
        const v=item.getAttribute('id')
        if (l===v) {
            item.onclick=null
        }
      })
      
   })
})
}
let plus=parseInt(localStorage.getItem("plus")) || 0
document.querySelector("#reussir").textContent=plus
function suivre(index) {
   let carte=document.querySelector("#carte")
   let retu=document.querySelector("#retu")
   order[index].statut="livre"
   localStorage.setItem("order",JSON.stringify(order))
   plus++
   let a=plus
   localStorage.setItem("plus",a)
   document.querySelector("#reussir").textContent=a
   carte.style.display="flex"
   retu.addEventListener("click",()=>{
      carte.style.display="none"
   })


}
let sommb = localStorage.getItem("mode")
let lala = document.querySelectorAll(".lala")
let nav = document.querySelectorAll(".nav")
let ic=document.querySelector("#ic")
let dodo=document.querySelector(".dodo")
let body = document.body
if (sommb === "sombre") {
   body.classList.add(sommb)
   dodo.classList.add(sommb)
   ic.style.fill="#3B82F6"
   lala.forEach(el=>{
      el.classList.add(sommb) 
      el.style.border= "1px solid gray"
   })
   nav.forEach(el=>{
      el.classList.add("navid")
   })
}


// function revenir() {
//    let a = document.querySelector(".spa")
//    order.forEach(el =>{
//       el.recu.forEach(item=>{
//          console.log(item);
         
//       })
//    })

// }
// revenir()

//
// ttr.forEach(el =>{
//    el.addEventListener(
//       order.forEach(item=>{

//       })

//    })
// })