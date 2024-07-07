const closeButton = document.getElementById("header-close-button");
const hamburgerIcon = document.getElementById("hamburger-icon");
const phoneNav = document.getElementById("phone-nav-item");


hamburgerIcon.addEventListener("click", () => {
    phoneNav.style.display = "block";
});

closeButton.addEventListener("click", () => {
    phoneNav.style.display = "none"; 
});
