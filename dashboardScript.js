
const usersData = JSON.parse(localStorage.getItem('users')) || [];


const userDataBody = document.getElementById('userDataBody');

// Loop through user data and create table rows
usersData.forEach(function(user) {
    const row = document.createElement('tr');
    
    const fullNameCell = document.createElement('td');
    fullNameCell.textContent = user.fullName;
    
    const emailCell = document.createElement('td');
    emailCell.textContent = user.email;
    
    const mobileCell = document.createElement('td');
    mobileCell.textContent = user.mobile;
    
    const usernameCell = document.createElement('td');
    usernameCell.textContent = user.username;
    
    row.appendChild(fullNameCell);
    row.appendChild(emailCell);
    row.appendChild(mobileCell);
    row.appendChild(usernameCell);
    
    userDataBody.appendChild(row);
});


// document.addEventListener('DOMContentLoaded', function() {
//   // Retrieve data from local storage
//   var userData = JSON.parse(localStorage.getItem('userData'));
  
//   // Display data in table
//   var table = document.getElementById('userData');
//   var row = table.insertRow();
//   var fullNameCell = row.insertCell(0);
//   var emailCell = row.insertCell(1);
//   var mobileNoCell = row.insertCell(2);
//   var usernameCell = row.insertCell(3);
  
//   fullNameCell.innerHTML = userData.fullName;
//   emailCell.innerHTML = userData.email;
//   mobileNoCell.innerHTML = userData.mobileNo;
//   usernameCell.innerHTML = userData.username;
// });




// document.addEventListener('DOMContentLoaded', function() {
//   // Retrieve data from local storage
//   var usersData = JSON.parse(localStorage.getItem('usersData')) || []; // Initialize as empty array if no data exists
  
//   // Display data in table
//   var table = document.getElementById('userData');

//   // Loop through each user data object
//   usersData.forEach(function(userData) {
//     var row = table.insertRow();
//     var fullNameCell = row.insertCell(0);
//     var emailCell = row.insertCell(1);
//     var mobileNoCell = row.insertCell(2);
//     var usernameCell = row.insertCell(3);
    
//     fullNameCell.innerHTML = userData.fullName;
//     emailCell.innerHTML = userData.email;
//     mobileNoCell.innerHTML = userData.mobileNo;
//     usernameCell.innerHTML = userData.username;
//   });
// });








// // Retrieve all keys from local storage
// var keys = Object.keys(localStorage);
// var table = document.getElementById("userTable");

// // Loop through each key and add user data to the table
// keys.forEach(function(key) {
//   var user = JSON.parse(localStorage.getItem(key));
//   var row = table.insertRow(-1);
//   var fullNameCell = row.insertCell(0);
//   var emailCell = row.insertCell(1);
//   var mobileCell = row.insertCell(2);
//   var usernameCell = row.insertCell(3);
//   fullNameCell.innerHTML = user.fullName;
//   emailCell.innerHTML = user.email;
//   mobileCell.innerHTML = user.mobile;
//   usernameCell.innerHTML = user.username;
// });