function where() {
    if (!navigator.geolocation) return console.log("gps non support");
    navigator.geolocation.getCurrentPosition(p => {
        const { latitude: lat, longitude: lon } = p.coords;
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lat},${lon}.json?access_token=VOTRE_TOKEN_MAPBOX&language=fr`)
            .then(r => r.json())
            .then(d => {
                if (d.features && d.features.length > 0) {
                    const place = d.features[0]
                    const context = place.context || []
                    let city = "non trouve"
                    let quartier = "non trouve"
                    let country = "non trouve"
                    context.forEach(item => {
                        if (item.id.includes('place')) city = item.text
                        if (item.id.includes('neighborhood')) quartier = item.text
                        if (item.id.includes('country')) country = item.text
                    })
                    console.log(`ville :${city}`);
                    console.log(`Quartier :${quartier}`);
                    console.log(`Pays :${country}`);
                    console.log(`Google maps: htpps://www.google.com/maps?q=${lat},${lon}`);
                }


            })
            .catch(()=> console.log("Erreur"))
    },
    errror => console.log(errror.message)
    )
}
where()