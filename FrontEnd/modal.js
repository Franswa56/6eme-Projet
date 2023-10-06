function displayElements(elements) {
   modalGallery.innerHTML = "";
   elements.forEach(element => {

       // Crée une div pour contenir l'image et l'icône
       const container = document.createElement("div");
       container.className = "image-container"; // Vous pouvez ajouter une classe pour styler le conteneur si nécessaire

       // Crée un nouvel élément "img" pour la photo
       const image = document.createElement("img");
       image.src = element.imageUrl;
       image.alt = element.title;

       // Crée une icône
       const icone = document.createElement("i");
       icone.className = "fa-solid fa-trash-can  delete-icone";

       // Ajoute l'image et l'icône à la div conteneur
       container.appendChild(image);
       container.appendChild(icone);

       // Ajoute le conteneur à la div "modal-gallery"
       modalGallery.appendChild(container);   
   });
}

// Sélection de la div avec la classe "gallery"
const modalGallery = document.querySelector(".modal-gallery");

// Requete a l'API puis transformation de la réponse en json
fetch(apiUrl)

   .then(response => {
    return response.json();

   })


   .then(data => {

      // Affichage de touts les travaux 
      displayElements(data);
   });


               // Ouvrir la Modal //
   const firstModal = document.querySelector(".modal-container");
   const secondModal = document.querySelector(".second-modal-container");
   const editButton = document.querySelector(".modify");
   const modal = document.querySelector(".modal");

   editButton.addEventListener("click",()=> {
    modal.style.display = "flex";
    secondModal.style.display = "none";
    firstModal.style.display = "flex";
});
              // Fermer la Modale //
const close = document.querySelectorAll(".modal-close");

close.forEach((cross)=> {
cross.addEventListener("click",()=> {
    modal.style.display = "none"
});
});
             // passer sur la Modale 2 //

const addButton = document.querySelector(".modal-button");


addButton.addEventListener("click",()=> {
   firstModal.style.display = "none";
   secondModal.style.display = "flex";
});

             // click sur Ajouter une image //

const clickButton = document.querySelector(".add-pics-button")
const inputButton = document.querySelector(".add-pics-input")

clickButton.addEventListener("click",() => {
   inputButton.click();
});

            //Verification du formulaire pour dégriser le bouton//

const photo = document.querySelector(".add-pics-input");
const title = document.getElementById("title");
const category = document.getElementById("category")
const addWorkButton = document.querySelector(".add-work-button")

function checkForm () {
   if (photo.value && title.value && category.value) {
      addWorkButton.disabled = false;
   } else {
      addWorkButton.disabled = true;
   }  
}

checkForm()

photo.addEventListener("input", checkForm)
title.addEventListener("input", checkForm)
category.addEventListener("input", checkForm)


            //Envoie du nouveau travail a l'API//
function getWorkInfo() {

   const formulaireNewWork = document.querySelector(".modal-form");
   formulaireNewWork.addEventListener("submit", function (event)  {
      event.preventDefault();

// Création de l'objet du nouveau travail

   const newWork = {
      imageUrl: event.target.querySelector("[name=upfile]").value,
      title: event.target.querySelector("[name=title]").value,
      name: event.target.querySelector("[name=category").value
};

// Conversion en Json

const chargeUtile = JSON.stringify(newWork);

console.log(chargeUtile)

fetch("http://localhost:5678/api-docs/works", {
   method: "POST",
   headers: {"content-Type": "application/json"},
   body: chargeUtile
})

}
)};
