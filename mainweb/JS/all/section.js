/* start section  */
const sectionsLink = document.getElementById("sectionsLink");
const sectionsLink2 = document.getElementById("sectionsLink2");
const navBar = document.getElementById("navBar");

const dropdown = document.querySelector(".dropdown");

sectionsLink.addEventListener("click", function() {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});



