let token = localStorage.getItem("authToken");

if (token) {
    let editBar = document.querySelector(".edit")
    editBar.style.display = "flex";

    let filters = document.querySelector(".filter-container")
    filters.style.visibility = "hidden";

    let modifyButton = document.querySelector(".modify");
    modifyButton.style.display = "inline";
} else {

}