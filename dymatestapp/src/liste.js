import React from 'react'



async function fetchData() {

     var articlesElt = document.getElementById("id01");
    const response = await fetch('http://127.0.0.1:8000/api/evenements/liste');
    const data = await response.json();
    var evenement = data;
    evenement.forEach(function (evenement ) {
        // Ajout du titre et du contenu de chaque article
        var titreElt = document.createElement("h2");
        var city = document.createElement("p");
        var contry = document.createElement("p");
        var imageElt = document.createElement("img");
        var address = document.createElement("p");
        var Lat = document.createElement("p");
        var lng = document.createElement("p");
        var separateur = document.createElement("br");
        titreElt.textContent = evenement.name;
        imageElt.src = evenement.image ;
        contry.textContent= evenement.contry;
        city.textContent = evenement.city;
        Lat.textContent=evenement.Lat;
        lng.textContent=evenement.lng;
        address.textContent=evenement.address;
        articlesElt.appendChild(titreElt);
        articlesElt.appendChild(contry);
        articlesElt.appendChild(address);
        articlesElt.appendChild(city);
        articlesElt.appendChild(Lat);
        articlesElt.appendChild(lng);
        articlesElt.appendChild(imageElt);
    });

    data.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
            console.log(`${key} ${value}`);

        });
        console.log('-------------------');
    });

}
export default liste

