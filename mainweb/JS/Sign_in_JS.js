// animation for swap user,aompany
const wrapper = document.querySelector(".wrapper"),
signupHeader = document.querySelector(".signup header"),
loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
    wrapper.classList.add("active");
});

signupHeader.addEventListener("click", () => {
    wrapper.classList.remove("active");
});


//end animation

// Retrieve data from localStorage on page load
var dataUser = JSON.parse(localStorage.getItem('dataUser')) || {};
var dataCompany = JSON.parse(localStorage.getItem('dataCompany')) || {};


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

//for Company
var inCompanyName = document.getElementById('inCompanyName');
var inCompanyID = document.getElementById('inCompanyID');
var inCompanyEmail = document.getElementById('inCompanyEmail');
var inCompanyPhone = document.getElementById('inCompanyPhone');
var inCompanyDescription = document.getElementById('inCompanyDescription');
var inCompanyCointry = document.getElementById('inCompanyCointry');
var inCompanyLocation = document.getElementById('inCompanyLocation');
var inCompanyPassword = document.getElementById('inCompanyPassword');
var inCompanyPassword2 = document.getElementById('inCompanyPassword2');


//for all
var popup = document.getElementById('popup');
var message = document.getElementById('message');    

//create a mesage for Error || new user
var mall = 'error 404 when register , plese try agin'; 


//create a mesage for Error || user id
var mUEID = 'the Id is empty'; // user Empty id 
var mULID = 'the length of user id must in range (5 , 10) , the id more than 10'; // user id Larger than 7 
var mULeID = 'the length of user id must in range (5 , 10) , the id less than 5 '; // user id less than 5 

//create a mesage for Error || user name
var mUEName = 'the user name is empty'; //  Empty user name

//create a mesage for Error || user Age
var mUEAge = 'the age is empty'; // user Empty age 
var mULAge = 'the age grate than our rule must tha age in range (16 , 80) , the age more than 80'; // user age Larger than 80 
var mULeAge = 'the age must in range (16 , 80) , the age less than 16 '; // user age less than 16 

//create a mesage for Error || user Gender
var mUEGender = 'the Gender is empty'; // user Empty gender
var mUNGender = 'the Gender must be a male or female'; // not male , female


//create a mesage for Error || all Email
var mAEemail = 'the Email is empty'; //  Empty Email
var mAIemail = 'Invalid email form , the right form is test@test.com'; // Invalid email form

//create a mesage for Error || all phone
var mAEphone = 'Empty phone number '; // Empty phone 
var mALphone = 'the lenght of phone number so smole '; // smole number

//create a mesage for Error || all (Cointry , Location)
var mAECointry = 'Empty Cointry , must fill it'; // Empty Cointry 
var mAELocation = 'Empty Location  , must fill it'; // Empty Location 

//create a mesage for Error || all Password
var mAEPass = 'Empty Password'; // Empty Password 
var mAE2Pass = 'Empty confirm password'; // Empty 2ns Password box
var mAL8Pass = 'too small, lenth more than 8'; // len of Password less than 8
var mANEPass = 'the Password are not equal'; // not equal Password 


//create a mesage for Error || company id
var mCEID = 'the Id is empty'; // Company Empty id 
var mCLID = 'the length of company id must in range (11 , 16) , the id more than 16'; // user id Larger than 11 
var mCLeID = 'the length of company id must in range (11 , 16) , the id less than 11 '; // user id less than 8 

//create a mesage for Error || company name
var mCEName = 'the Company name is empty'; //  Empty company name

//create a mesage for Error || company Description
var mCEDescription = 'the Company Description is empty'; //  Empty company Description

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

//validate company and save his data
function newCompany(){ //newCompany()
    if(
        (checkCID())&&
        (validateUName(inCompanyName))&&
        (validateEmail(inCompanyEmail.value))&&
        (validatePhoneNumber(inCompanyPhone))&&
        (validityCompanyDescription())&&
        (validateCointry(inCompanyCointry))&&
        (validateLocation(inCompanyLocation))&&
        (validatePassword(inCompanyPassword ,inCompanyPassword2)) 
    ){
        var checkbox = document.getElementById("boxCompany");

        if (checkbox.checked) {
            saveDataCompany();
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
function back(){ 
   (document.querySelector(".popup")).style.display = 'none';

}
//end Popup message

//  validate User ID
function checkUID(){
    if(inUserID.value == ""){  
        showPopupID(mUEID);
        return false ; 
    }
    else if( inUserID.value.length > 11){ 
        showPopupID(mULID);
        return false ; 
    }
    else if( inUserID.value.length < 5){ 
        showPopupID(mULeID);
        return false ; 
    }
    return true ;
}

//  validate Company ID
function checkCID(){
    if(inCompanyID.value == ""){  
        showPopupID(mCEID);
        return false ; 
    }
    else if( inCompanyID.value.length > 17){ 
        showPopupID(mCLID);
        return false ; 
    }
    else if( inCompanyID.value.length < 11){ 
        showPopupID(mCLeID);
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
//validate Company Description
function validityCompanyDescription(){
    if(inCompanyDescription.value == ""){
        showPopupID(mCEDescription);
        return false;
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

function saveDataCompany() {
//save data
    var cname = inCompanyName.value;
    var cID = inCompanyID.value;
    var cEmail = inCompanyEmail.value;
    var cPhone = inCompanyPhone.value;
    var cDescription = inCompanyDescription.value;
    var cCointry = inCompanyLocation.value;
    var cLocation = inUserLocation.value;
    var cPassword = inCompanyPassword.value;

    
    var CompanyData = {
        cname: cname,
        cID: cID,
        cEmail: cEmail,
        cPhone: cPhone,
        cDescription: cDescription,
        cCointry: cCointry,
        cLocation: cLocation,
        cPassword:cPassword,
        image: '',
        Verified : 0 ,
        };

        // Index subarray by ID in the dataObject
        dataCompany[cID] = CompanyData;

        // Store the updated dataObject in localStorage
        localStorage.setItem('dataCompany', JSON.stringify(dataCompany));

        inCompanyName.value = '';
        inCompanyID.value = '';
        inCompanyEmail.value = '';
        inCompanyPhone.value = '';
        inCompanyDescription.value = '';
        inCompanyCointry.value = '';
        inCompanyLocation.value = '';
        inCompanyPassword.value = '';
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
            console.log(dataCompany);
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

