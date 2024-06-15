function CAndGo() {
    // Retrieve the values of inUserID and inUserPassword
    var inUserID = document.getElementById('inUserID').value;
    var inUserPassword = document.getElementById('inUserPassword').value;

    if (inUserID.length >= 5 && inUserID.length <= 10) {
      console.log("Searching in dataUser:");
      searchData("U", inUserID, inUserPassword);
    } else if (inUserID.length >= 11 && inUserID.length <= 15) {
      console.log("Searching in dataCompany:");
      searchData("C", inUserID, inUserPassword);
    } else {
      console.log("Invalid ID length");
    }
  }

  function searchData(type, inUserID, inUserPassword) {
    var data =
      type === 'U'
        ? JSON.parse(localStorage.getItem('dataUser')) || {}
        : JSON.parse(localStorage.getItem('dataCompany')) || {};

    // Check if the ID exists in the data object
    if (data.hasOwnProperty(inUserID)) {
      // Check if the entered password matches the stored password
      if ((data[inUserID].uPassword === inUserPassword) ||(data[inUserID].cPassword === inUserPassword)) {
        console.log("Password matches!");
        console.log("User Data:");
        console.log(data[inUserID]);

        window.location.href = "mainwebi_html.html";
        
      } else {
        console.log("Incorrect password!");
        console.log(data[inUserID]);
        console.log(inUserPassword);
      }
    } else {
      // If not found, show an alert
      console.log(`Data not found for ID ${inUserID}`);
    }
  }