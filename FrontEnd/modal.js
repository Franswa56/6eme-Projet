function displayModalElements(elements) {
   modalGallery.innerHTML = "";
   elements.forEach(element => {

       // Crée une div pour contenir l'image et l'icône
       const container = document.createElement("div");
       container.className = "image-container"; 

       // Crée un nouvel élément "img" pour la photo
       const image = document.createElement("img");
       image.src = element.imageUrl;
       image.alt = element.title;

       // Crée une icône
       const icone = document.createElement("i");
       icone.setAttribute("data-id", element.id);
       icone.className = "fa-solid fa-trash-can delete-icone icone-" + element.id;

       // Ajoute l'image et l'icône à la div conteneur
       container.appendChild(image);
       container.appendChild(icone);

       // Ajoute le conteneur à la div "modal-gallery"
       modalGallery.appendChild(container);

       //Event listener pour la suppression (voir ligne 141)

       icone.addEventListener('click', deleteWork);
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
      displayModalElements(data);
   });


               // Ouvrir la Modal //
   const firstModal = document.querySelector(".modal-container");
   const secondModal = document.querySelector(".second-modal-container");
   const editButton = document.querySelector(".modify");
   const modal = document.querySelector(".modal");

   editButton.addEventListener("click",(event)=> {
    console.log("modalclick")
    event.stopPropagation();
    modal.style.display = "flex";
    secondModal.style.display = "none";
    firstModal.style.display = "flex";
});
              // Fermer la Modale //

// grace a la croix
const close = document.querySelectorAll(".modal-close");

close.forEach((cross)=> {
cross.addEventListener("click",()=> {
    modal.style.display = "none"
});
});

// en cliquant a l'exterieur

const modalWindow = document.querySelector(".modal-window")

document.addEventListener("click", (event) => {

    if (!modalWindow.contains(event.target)) {
        modal.style.display = "none";
    }
});
             // passer sur la Modale 2 //

const addButton = document.querySelector(".modal-button");


addButton.addEventListener("click",()=> {
   firstModal.style.display = "none";
   secondModal.style.display = "flex";
});

              // Retour sur Modale 1 //

const returnButton = document.querySelector(".modal-return");

returnButton.addEventListener("click",()=> {
    firstModal.style.display = "flex";
    secondModal.style.display = "none";
 });



             // click sur Ajouter une image //

const clickButton = document.querySelector(".add-pics-button")
const inputButton = document.querySelector(".add-pics-input")
const imagePreview = document.querySelector(".add-pics-preview");

// Aperçu de l'image ajoutée et restriction taille de fichier 

inputButton.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        // Convertir la taille du fichier en Mo
        const fileSizeInMB = file.size / (1024 * 1024);

        if (fileSizeInMB > 4) {
            alert('Le fichier est trop volumineux! Veuillez sélectionner un fichier de moins de 4 Mo.');
            event.target.value = '';
        }};
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = "block"; 
        }
        reader.readAsDataURL(file);
    }

});

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


// Création de l'objet du nouveau travail

function getFormData() {
   const form = document.querySelector(".modal-form");
   const formData = new FormData();

   const fileInput = form.querySelector("[name=upfile]");
   if (fileInput.files.length > 0) {
       formData.append('image', fileInput.files[0]);
   }
   
   formData.append('title', form.querySelector("[name=title]").value);
   formData.append('category',form.querySelector("[name=category]").value); 

   console.log(formData)
   return formData;

  
}
 
   document.getElementById("submitButton").addEventListener("click", function(event) {
      event.preventDefault();
      const data = getFormData();

// lecture du fichier pour l'aperçu de l'image

// Aperçu de l'image
const imagePreview = document.querySelector(".add-pics-preview");

inputButton.addEventListener("change", function(event) {
    console.log("File input changed");
    // Ici, vous pouvez ajouter le code pour afficher l'aperçu de l'image
});


// Envoi du nouveau travail

      fetch("http://localhost:5678/api/works", {
          method: "POST",
          headers: {
              'Authorization': `Bearer ${localStorage.getItem("authToken")}`
          },
          body: data
});
});

               //Suppression d'un Travail au click sur l'icone//
              
function deleteWork(event) {

   event.preventDefault();
 
// recupération de l'id du travail grace au data-id de l'icone
   const workId = event.target.dataset.id

// requête pour la suppression du travail avec token d'authenticication
   fetch(`http://localhost:5678/api/works/${workId}`, {
        method: 'DELETE',
        headers: {
         'Authorization': `Bearer ${localStorage.getItem("authToken")}`
     }
    })
   
    .then(response => {
        if(response.ok) {

            event.target.parentElement.remove();
        } else {
            console.error('Erreur lors de la suppression du travail', response.statusText);
        }
    })
}