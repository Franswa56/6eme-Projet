 ////////////////////////////  Connexion Utilisateur ////////////////////////////////////


 const formulaire = document.querySelector('.form-connexion')

 formulaire.addEventListener('submit', function(event) {
    // Empechement du rechargement
    event.preventDefault();
    
    // Récuperation des identifiants 
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
 
    // Envoie de la requète fetch a l' API
    fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            // Garde le token et redirige l'utilisateur
            localStorage.setItem('authToken', data.token);
            window.location.href = 'index.html';
            
        } else {
            // message d'identifiants incorrects
            alert('E-mail ou mot de passe incorrect.');
        }
    })
 });

 