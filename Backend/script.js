
                     // Fonction d'affichage dans la gallery //

function displayElements(elements) {
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



const apiUrl = 'http://localhost:5678/api/works';

// Sélection de la div avec la classe "gallery"
const gallery = document.querySelector(".gallery");

// Requete a l'API puis transformation de la réponse en json
fetch(apiUrl)

   .then(response => {
    return response.json();

   })


   .then(data => {

      // Affichage de touts les travaux 
      displayElements(data);

                            // Filtre "Tous" //
      filtreObjet = document.querySelector(".filter-1");
      filtreObjet.addEventListener("click", () => {
         displayElements(data);
      });
                            // Filtre Objets //
      // Filtre les travaux au clique
      filtreObjet = document.querySelector(".filter-2")
      filtreObjet.addEventListener("click", () => {         
   
         const filteredPieces = data.filter((piece) => piece.category.name === "Objets");
      
      // Affiche les travaux filtrés
      displayElements(filteredPieces);

});

                            // Filtre Appartements //
      // Filtre les travaux au clique
         filtreAppartements = document.querySelector(".filter-3")
      filtreAppartements.addEventListener("click", () => {         
   
         const filteredPieces = data.filter((piece) => piece.category.name === "Appartements");
      
      // Affiche les travaux filtrés
      displayElements(filteredPieces);
  });

                        // Filtre Hotels & restaurants //
      // Filtre les travaux au clique
      filtreHotel = document.querySelector(".filter-4")
      filtreHotel.addEventListener("click", () => {         
   
         const filteredPieces = data.filter((piece) => piece.category.name === "Hotels & restaurants");
      
      // Affiche les travaux filtrés
      displayElements(filteredPieces);

});
});
      





