//common data
const Name = document.getElementById("name");
const ID = document.getElementById("ID");
const Email = document.getElementById("Email");
const Number = document.getElementById("Number");
const country = document.getElementById("country");
const Alocation = document.getElementById("location");
const btnSave = document.getElementById("save");
//user data 
const gender = document.getElementById("gender");
const lblGender = document.getElementById("lblGender");
const age = document.getElementById("age");
const lblAge = document.getElementById("lblAge");

//Company data
const description = document.getElementById("description");
const lblDescription = document.getElementById("lblDescription");

lblDescription.style.display = 'none';
description.style.display = 'none';


// select an image
const showImageButton = document.getElementById("show-image-button");
const imageContainer = document.getElementById("image-container");
const closeButton = document.getElementById("close-button");
const imageList = document.getElementById("image-list");
const selectedImage = document.getElementById("selected-image");



showImageButton.addEventListener("click", () => {
    imageContainer.style.display = "flex";
});

closeButton.addEventListener("click", () => {
    imageContainer.style.display = "none";
});

// Handle image selection and display
imageList.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        // Get the selected image's path
        const imagePath = event.target.getAttribute("src");

        // Set the source of the selected image in the body
        selectedImage.setAttribute("src", imagePath);

        // Display the selected image
        selectedImage.style.display = "block";

        // Log the selected image's path to the console
        console.log(`Selected image path: ${imagePath}`);

        // Close the image selection box
        imageContainer.style.display = "none";
    }
});
//end selext image


//start swap between box 
// declared a box 
var firstBox = document.getElementById('firstBox');
var secondBox = document.getElementById('secondBox');

// hide other box
secondBox.style.display = 'none';

//show first box
function showF(){
    secondBox.style.display = 'none';
    firstBox.style.display = 'block';
}
//show second Box
function showS(){
    firstBox.style.display = 'none';
    secondBox.style.display = 'block';
}

//end swap between box


// show Company data
function showC(){

    age.style.display = 'none';
    lblAge.style.display = 'none';
    gender.style.display = 'none';
    lblGender.style.display = 'none';

    description.style.display = 'block';
    lblDescription.style.display = 'block';

}
// show User data
function showU(){
    age.style.display = 'block';
    lblAge.style.display = 'block';
    gender.style.display = 'block';
    lblGender.style.display = 'block';

    description.style.display = 'none';
    lblDescription.style.display = 'none';
}




/*
// Function to log all form values
function logFormValues() {
    //var userId = document.getElementById("user-id-input").value;
    const firstName = document.getElementById("name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

   // console.log("User ID:", userId);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);

}
*/

/*show another fild for password*/

/*
const Password = document.getElementById("password")
const showButton = document.getElementById("show-button");
const hiddenField = document.getElementById("hidden-field");

Password.disabled = true;

showButton.addEventListener("click", () => {
    // Toggle the visibility of the hidden field
    if (hiddenField.style.display === "none") {
        hiddenField.style.display = "block";
        Password.disabled = false;
    } else {
        hiddenField.style.display = "none";
        Password.disabled = true;
    }
});

*/



//const user = document.querySelector('.user');



function change(){ 
    if (Company.style.display === "none") {
        Company.style.display = "block";
        Company1.style.display = "block";
        user.style.display = "none";
        user1.style.display = "none";
        imUser.textContent = 'im Company';
    } 
    else {
        user.style.display = "block";
        user1.style.display = "block";
        Company.style.display = "none";
        Company1.style.display = "none";
        imUser.textContent = 'im user';
    }
}