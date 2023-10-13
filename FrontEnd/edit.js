let token = localStorage.getItem("authToken");

if (token) {
    let editBar = document.querySelector(".edit")
    editBar.style.display = "flex";

    let filters = document.querySelector(".filter-container")
    filters.style.visibility = "hidden";

    let modifyButton = document.querySelector(".modify");
    modifyButton.style.display = "inline";

    let loginButton = document.querySelector(".login")
    loginButton.style.display = "none";

    let logoutButton = document.querySelector(".logout");
    logoutButton.style.display = "block";

    let header = document.querySelector(".index-header");
    header.style.paddingTop = "50px"
};

// Deconnexion utilisateur

const logoutButton = document.querySelector(".logout");

logoutButton.addEventListener("click",() => {
   localStorage.clear();
   window.location.href = 'index.html';
});
