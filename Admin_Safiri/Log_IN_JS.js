

var dataUser = JSON.parse(localStorage.getItem('dataUser')) || {};
var dataCompany = JSON.parse(localStorage.getItem('dataCompany')) || {};




function searchUserData() {
    // Get the ID to search for
    var inUserID = document.getElementById('inUserID').value;

    // Check if the ID exists in the data object
    if (dataUser.hasOwnProperty(inUserID)) {
        // If found, display the data
        console.log("find");
        console.log(dataUser[inUserID]);
        //console.log(dadataUserta[inUserID].uname);


    } else {
        // If not found, show an alert
        alert(`Data not found for ID ${inUserID}`);
    }
}

function searchCompanyData() {
    // Get the ID to search for
    var inUserID = document.getElementById('inCompanyID').value;

    // Check if the ID exists in the data object
    if (dataCompany.hasOwnProperty(inUserID)) {
        // If found, display the data
        console.log("find");
        console.log(dataCompany[inUserID]);
        //console.log(dataCompany[inUserID].cname);


    } else {
        // If not found, show an alert
        alert(`Data not found for ID ${inUserID}`);
    }
}