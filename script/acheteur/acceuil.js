
// function getlocalisation(){
// fetch(`http://ip-api.com/json/`)
// .then(r=>r.json())
// .then(data=>{
//     if (data.status === `success`) {
//         console.log(`pays:${data.country}`);
//         console.log(`ville: ${data.city}`);
//         console.log(`quartier:${data.district || data.regionName || "non disponible"}`);
//         console.log(`${data.lat}, ${data.lon}`);
//         fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${data.lat}&lon=${data.lon}&addressdetails=1&accept-language=fr`)
//         .then(r=>r.json())
//         .then(d=>{
//             if (d.address) {
//                 console.log(`quarier (precis):${d.address.neighbourhood|| d.address.suburb ||"non trouve"}`);
//                 console.log(`rue:${d.address.road || "nontrouve"}`);
                
//             }
//         })
//     }
// })
// .catch(()=>console.log("erreur,passage au gps...")
// )
// }
// getlocalisation()

// vrais




