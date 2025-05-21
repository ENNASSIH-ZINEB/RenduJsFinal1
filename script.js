// 💻📝 Rendu final JS – Génération d'un site web dynamique à partir des données d'une API
// Objectif : utilisation de fetch() pour récupérer des données JSON, manipulation DOM, boucles, gestion d'images et cartes interactives.
// 🟢 Niveau 1 – Récupérer les données de l'API
// Utilise fetch() pour récupérer les données JSON depuis l'API https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/.
// Tu as le choix du sujet, donc clique bien sur le sujet de ton choix pour avoir l'URL finale.
// Vérifie si la réponse de l'API est correcte. Si oui, passe les données à une fonction qui affichera le contenu du site.
// 🟡 Niveau 2 – Affichage du contenu principal
// Dans la fonction, crée un élément div pour afficher le nom de l'entreprise, sa phrase d'accroche et un bouton d'appel à l'action.
// Affiche ces informations dynamiquement avec les données récupérées depuis l'API.
// 🔴 Niveau 3 – Afficher les activités
// Pour chaque activité dans les données JSON, crée dynamiquement une div contenant un titre, une description et une image.
// Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image.
// 🔴🔴 Niveau 4 – Afficher les témoignages
// Pour chaque témoignage dans les données JSON, crée dynamiquement une div contenant le prénom, le commentaire.
// Ajoute ces témoignages sous les activités dans la page.
// 🔴🔴🔴 Niveau 5 (optionnel) – Ajouter une carte interactive
// Ajoute une carte interactive à la page à l’aide de la bibliothèque Leaflet.js.
// Utilise les coordonnées fournies dans les données JSON pour centrer la carte et y ajouter un fond de carte interactif.
// 💎 Bonus – Design et personnalisation
// Fonts personnalisées : Ajoute des fonts depuis Google Fonts
// Icônes : Utilise une bibliothèque comme Font Awesome ou Material Icons
// Favicon personnalisé : via balise <link rel="icon" ...>
// Design : styles CSS avec couleurs, espaces, ombres, transitions, animations légères

// import { createElement } from "react";

// 🟢 Niveau 1 – Récupérer les données de l'API
// Utilise fetch() pour récupérer les données JSON depuis l'API https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/.
// Tu as le choix du sujet, donc clique bien sur le sujet de ton choix pour avoir l'URL finale.
// Vérifie si la réponse de l'API est correcte. Si oui, passe les données à une fonction qui affichera le contenu du site.

fetch(
  "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json"
)
  .then((response) => response.json())
  .then((data) => {
    let productContainer = document.getElementById("product-container");
    // console.log(data);

    let Ese = document.createElement("div");
    Ese.classList.add("Ese");

    Ese.innerHTML = `
    <h1>${data.nomEntreprise}</h1>
    <h2>${data.slogan} </h2>
    <button>${data.bouton}</button>
            `;
    productContainer.appendChild(Ese);


       let benefclt= document.getElementById("benefice");
    let beneficeclient = data.listeBeneficesClients;
    let benefice = document.createElement("div")
    beneficeclient.forEach(e => {
    
      let Benef= document.createElement("h4");
      Benef.textContent=e;
      benefclt.appendChild(benefice);
      benefice.appendChild(Benef);



    });

    
    function produit() {
      let produit = data.produits;
      // 🔴 Niveau 3 – Afficher les activités
// Pour chaque activité dans les données JSON, crée dynamiquement une div contenant un titre, une description et une image.
// Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image.
      produit.forEach((element) => {
        console.log(element);
        
  
        let activité = document.getElementById("activité");
        let carteproduit= document.getElementById("carteproduit");

        let carte = document.createElement("div");
        carte.classList.add("card");

        carte.innerHTML = `
              <img src="${element["image-url"]}" alt="${element.titre}">
              <h3>${element.titre}</h3>
              <p>${element.presentation}</p>
            `;
        activité.appendChild(carte);

      });
    }
    produit()

 function Client() {
      let client = data.clients;
      // 🔴 Niveau 3 – Afficher les activités
// Pour chaque activité dans les données JSON, crée dynamiquement une div contenant un titre, une description et une image.
// Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image.
      client.forEach((i) => {
        console.log(i);
        
  
        let clt= document.getElementById("carteclient");

        let clientcard = document.createElement("div");
        clientcard.classList.add("clientcard");

        clientcard.innerHTML = `
              
              <h4>${i.nom}</h4>
              <h5>${i.typePrestation}</h5>
              <p>${i.commentaire}</p>
              <p> Note: ${i.note}</p>
            `;
        carteclient.appendChild(clientcard);

      });
    }
    Client()

  });



  