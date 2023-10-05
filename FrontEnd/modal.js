function displayElements(elements) {
    modalGallery.innerHTML = "";
    elements.forEach(element => {
 
       
       // Crée un nouvel élément "img" pour la photo
       const image = document.createElement("img")
       image.src = element.imageUrl;
       image.alt = element.title;             
 
       // Ajoute l'élément "article" à la div "gallery"
       modalGallery.appendChild(image)      
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
})
