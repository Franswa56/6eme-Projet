 // Fonction d'affichage dans la gallery //

 export function displayElements(elements) {

   gallery.innerHTML = "";
   
   elements.forEach(element => {

      // Crée un nouvel élément "article"
      const article = document.createElement("article")
      
      // Crée un nouvel élément "img" pour la photo
      const image = document.createElement("img")
      image.src = element.imageUrl;
      image.alt = element.title;

   
      
      // Crée un nouvel élément "p" pour le titre
      const title = document.createElement("p");
      title.innerText = element.title;
      
      // Ajoute l'image et le titre à l'élément "article"
      article.appendChild(image);
      article.appendChild(title);

      // Ajoute l'élément "article" à la div "gallery"
      gallery.appendChild(article)      
});
}
      // Actualisation de la page d'accueil en temps réel

const apiWorksUrl = 'http://localhost:5678/api/works';

// Sélection de la div avec la classe "gallery"
const gallery = document.querySelector(".gallery");

// Requete a l'API puis transformation de la réponse en json

fetch(apiWorksUrl)

   .then(response => {
    return response.json();

   })


   .then(data => {

      // Affichage de touts les travaux
      displayElements(data);

      const addForm = document.querySelector(".modal-form");
      const workUpdate = document.getElementById("submitButton")
 




                            // Filtre "Tous" //
      const filtreTous = document.querySelector(".filter-1");
      filtreTous.addEventListener("click", () => {
         displayElements(data);
      });
                            // Filtre Objets //
      // Filtre les travaux au clique
      const filtreObjet = document.querySelector(".filter-2")
      filtreObjet.addEventListener("click", () => {         
   
         const filteredPieces = data.filter((piece) => piece.category.name === "Objets");
      
      // Affiche les travaux filtrés
      displayElements(filteredPieces);


});

                            // Filtre Appartements //
      // Filtre les travaux au clique
         const filtreAppartements = document.querySelector(".filter-3")
      filtreAppartements.addEventListener("click", () => {         
   
         const filteredPieces = data.filter((piece) => piece.category.name === "Appartements");
      
      // Affiche les travaux filtrés
      displayElements(filteredPieces);
  });

                        // Filtre Hotels & restaurants //
      // Filtre les travaux au clique
      const filtreHotel = document.querySelector(".filter-4")
      filtreHotel.addEventListener("click", () => {         
   
         const filteredPieces = data.filter((piece) => piece.category.name === "Hotels & restaurants");
      
      // Affiche les travaux filtrés
      displayElements(filteredPieces);

});
});




      





