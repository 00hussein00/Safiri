

// Retrieve data from localStorage on page load
var dataUser = JSON.parse(localStorage.getItem('dataUser')) || {};


// for user
var inUserName = document.getElementById('inUserName');
var inUserID = document.getElementById('inUserID');
var inUserEmail = document.getElementById('inUserEmail');
var inUserPhone = document.getElementById('inUserPhone');
var inUserGender = document.getElementById('inUserGender');
var inUserAge = document.getElementById('inUserAge');
var inUserCointry = document.getElementById('inUserCointry');
var inUserLocation = document.getElementById('inUserLocation');
var inUserPassword = document.getElementById('inUserPassword');
var inUserPassword2 = document.getElementById('inUserPassword2');



//for all
var popup = document.getElementById('popup');
var message = document.getElementById('message');    

//create a mesage for Error || new user
var mall = 'error 404 when register , plese try agin'; 


//create a mesage for Error || user id
var mUEID = 'the Id is empty'; // user Empty id 
var mULID = 'the id must in range (5 , 7) , the id more than 7'; // user id Larger than 7 
var mULeID = 'the id must in range (5 , 7) , the id less than 5 '; // user id less than 5 

//create a mesage for Error || user name
var mUEName = 'the user name is empty'; //  Empty user name

//create a mesage for Error || user Age
var mUEAge = 'the age is empty'; // user Empty age 
var mULAge = 'the age grate than our rule must tha age in range (16 , 80) , the age more than 80'; // user id Larger than 7 
var mULeAge = 'the age must in range (16 , 80) , the id less than 16 '; // user id less than 5 

//create a mesage for Error || user Gender
var mUEGender = 'the Gender is empty'; // user Empty age 
var mUNGender = 'the Gender must be a male or female'; // user Empty age 


//create a mesage for Error || all Email
var mAEemail = 'the Email is empty'; //  Empty Email
var mAIemail = 'Invalid email form , the right form is test@test.com'; // Invalid email form

var mAEphone = 'Empty phone number '; // Empty phone 
var mALphone = 'the lenght of phone number so smole '; // smole number

var mAECointry = 'Empty Cointry , must fill it'; // Empty Cointry 
var mAELocation = 'Empty Location  , must fill it'; // Empty Location 

var mAEPass = 'Empty Password'; // Empty Password 
var mAE2Pass = 'Empty confirm password'; // Empty 2ns Password box
var mAL8Pass = 'too small, lenth more than 8'; // len of Password less than 8
var mANEPass = 'the Password are not equal'; // not equal Password 



//create a mesage for Error || not check privicy
var mACheck = 'must read and accept all privacy policy'; 


//validate user and save his data
function newUser(){
    if(
        (checkUID())&&
        (validateUName(inUserName))&&
        (validateEmail(inUserEmail.value))&&
        (validatePhoneNumber(inUserPhone))&&
        (checkUAge(inUserAge))&&
        (validategender(inUserGender))&&
        (validateCointry(inUserCointry))&&
        (validateLocation(inUserLocation))&&
        (validatePassword(inUserPassword ,inUserPassword2)) 
    ){
        var checkbox = document.getElementById("boxUser");

        if (checkbox.checked) {
            saveDataUser();
            Show();
        }
        else{
            showPopupID(mACheck); 
        }

    }

}





//start Popup message
/* show message box */
function showPopupID(me){ 
    message.innerText  = me ;
    (document.querySelector(".popup")).style.display = 'block';
}

/* back to log in  */
function closepopup(){ 
   // window.location.href = "Sing_In.html";
    (document.querySelector(".popup")).style.display = 'none';

}
//end Popup message

//  validate User ID
function checkUID(){
    if(inUserID.value == ""){  
        showPopupID(mUEID);
        return false ; 
    }
    else if( inUserID.value.length > 7){ 
        showPopupID(mULID);
        return false ; 
    }
    else if( inUserID.value.length < 5){ 
        showPopupID(mULeID);
        return false ; 
    }
    return true ;
}

//  validate User Age   
function checkUAge(age){
    if(age.value == ""){  
        showPopupID(mUEAge);
        return false ; 
    }
    else if( age.value > 80){ 
        showPopupID(mULAge);
        return false ; 
    }
    else if( age.value < 16){ 
        showPopupID(mULeAge);
        return false ; 
    }
    return true ;
}

//validate all name
function validateUName(name){ 
        if(name.value == ""){ 
            showPopupID(mUEName);
            return false ;
        }

    return true ;
}
// validate Email  
function validateEmail(email){
    if(email.value == ""){
        showPopupID(mAEemail);
        return false;
    }    
    else if(checkEmailForm(email) ){
        return true ; 
    }
 
    showPopupID(mAIemail);

    return false;
}
// check if email in valid form  
function checkEmailForm(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

//validate user gender  validategender(inUserGender)
function validategender(G){
    if(G.value == "" ){ //G.value.toLowerCase() == "male" 
        showPopupID(mUEGender);
        return false;
    }
    else if(G.value.toLowerCase() == "male" ||G.value.toLowerCase() == "female"){
        return true ;
    }
    showPopupID(mUNGender);
    return false;
 
}

//validate Phone Number   
function validatePhoneNumber(Phone) {
    if(Phone.value == ""){
        showPopupID(mAEphone);
        return false ; 
    }

    else if( Phone.value.length < 5){ 
        showPopupID(mALphone);
        return false ; 
    }
    return true ;
}

//validate all Cointry  
function validateCointry(Cointry){
    if(Cointry.value == ""){
        showPopupID(mAECointry);
        return false;
    }
    return true ; 
}

//validate all Location   
function validateLocation(Location){
    if(Location.value == ""){
        showPopupID(mAELocation);
        return false;
    }
    return true ; 
}

// check all password 
function validatePassword(pass,pass2){
    if(pass.value == ""){
        showPopupID(mAEPass);
        return false ; 
    }
    else if(pass.value.length < 8) {
        showPopupID(mAL8Pass);
        return false ; 
    }
    else if(pass2.value == ""){
        showPopupID(mAE2Pass);
        return false ; 
    }
    else if(areEqual(pass.value, pass2.value)){
        return true;
    }
    else{
        return false;
    }
}



// check of tow password are equal  */
function areEqual(string1, string2) {
    if (string1.length !== string2.length) {
        showPopupID(mANEPass);
        return false; 
    }

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) {
            showPopupID(mANEPass);
            return false; 
        }
    }

    return true;
}




function saveDataUser() {
//save data
    var uname = inUserName.value;
    var uID = inUserID.value;
    var uEmail = inUserEmail.value;
    var uPhone = inUserPhone.value;
    var uGender = inUserGender.value;
    var uAge = inUserAge.value;
    var uCointry = inUserCointry.value;
    var uLocation = inUserLocation.value;
    var uPassword = inUserPassword.value;

    
    var personData = {
        uname: uname,
        uID: uID,
        uEmail: uEmail,
        uPhone: uPhone,
        uGender: uGender,
        uAge: uAge,
        uCointry: uCointry,
        uLocation: uLocation,
        uPassword:uPassword,
        image: '',
        Verified : 0 ,
        };

        // Index subarray by ID in the dataObject
        dataUser[uID] = personData;

        // Store the updated dataObject in localStorage
        localStorage.setItem('dataUser', JSON.stringify(dataUser));

        inUserName.value = '';
        inUserID.value = '';
        inUserEmail.value = '';
        inUserPhone.value = '';
        inUserGender.value = '';
        inUserAge.value = '';
        inUserCointry.value = '';
        inUserLocation.value = '';
        inUserPassword.value='';
        }


/*        // Function to display saved data
        function displaySavedData() {
            savedDataDiv.innerHTML = '';
            for (var id in dataObject) {
                var personData = dataObject[id];
                var dataElement = document.createElement('p');
                dataElement.textContent = "ID: " + id + ", Name: " + personData.name + ", Age: " + personData.age + ", Height: " + personData.height;
                savedDataDiv.appendChild(dataElement);
            }
        }
*/
        // Function to display the dataObject in the console
        function Show(){ 
            console.log(dataUser);
        }

 /*       // Function to search for an ID and alert all sublists if found
        searchButton.addEventListener('click', function() {
            var searchId = searchIdInput.value;
            if (dataObject.hasOwnProperty(searchId)) {
                alert("ID " + searchId + " found. Data: " + JSON.stringify(dataObject[searchId]));
            } else {
                alert("ID " + searchId + " not found.");
            }
        });
*/
// Display saved data on page load
//displaySavedData();

