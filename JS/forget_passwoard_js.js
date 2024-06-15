var popup = document.getElementById('popup');

var inID = document.getElementById('inID');
var inemail = document.getElementById('inemail');
var inphone = document.getElementById('inphone');



// Retrieve data from localStorage on page load
var forget_passwoard = JSON.parse(localStorage.getItem('forget_passwoard')) || {};

function saveData() {
//save data
    var ID = inID.value;
    var email = inemail.value;
    var phone = inphone.value;


    
    var forgetPasswoard = {
        ID: ID,
        email: email,
        phone: phone,
        };

        // Index subarray by ID in the dataObject
        forget_passwoard[ID] = forgetPasswoard;

        // Store the updated dataObject in localStorage
        localStorage.setItem('forget_passwoard', JSON.stringify(forget_passwoard));

        showPopup()
        console.log(forget_passwoard);
}

/* show message box */
function showPopup(){ 
    popup.style.display = 'block';
}

/* back to log in  */
function goLogIn(){ 
    window.location.href = "logIN_html.html";
}