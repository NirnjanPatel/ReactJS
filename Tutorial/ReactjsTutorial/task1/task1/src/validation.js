// import React from 'react'

// const validation = () => {


//     firstName = document.getElementById('firstName');
//     lastName = document.getElementById('lastName');
//     email = document.getElementById('email');
//     password = document.getElementById('password');
//     cPassword = document.getElementById('cPassword');
//     mobileNumber = document.getElementById('mobileNumber');

//     err1 = document.getElementById('err1');
//     err2 = document.getElementById('err2');
//     err3 = document.getElementById('err3');
//     err4 = document.getElementById('err4');
//     err5 = document.getElementById('err5');
//     err6 = document.getElementById('err6');
  

//   var firstName = firstName.value;
//   var lastName = lastName.value;
//   var email = email.value;
//   var password = password.value;
//   var cPassword = cPassword.value;
//   var mobileNumber = mobileNumber.value;

//   if (firstName.length == 0) {
//       err1.innerHTML = "*plz enter first name";
//       err1.style.color = "red";
//     }
//     else {
//       err1.innerHTML = "";
//   }
  

//   if (lastName.length == 0) {
//     err2.innerHTML = "*plz enter last name";
//     err2.style.color = "red";
//   }
//   else {
//     err2.innerHTML = "";
//   }

//     if (email.length == 0) {
//       err3.innerHTML = "*plz enter email";
//       err3.style.color = "red";
//     }
//     else {
//       err3.innerHTML = "";
//   } 

//   if (password.length == 0) {
//     err2.innerHTML = "*plz enter password";
//     err2.style.color = "red";
//   }
//   else {
//     err2.innerHTML = "";
//   }

//     if (mob.length == 0) {
//       err5.innerHTML = "*plz enter mobile";
//       err5.style.color = "red";
//     }
//     else if (isNaN(mob)) {
//       err5.innerHTML = "*plz enter digits";
//       err5.style.color = "red"
//     }
//     else if (mob.length < 10 || mob.length > 10) {
//       err5.innerHTML = "enter only 10 digits";
//       err5.style.color = "red";
//     }
//     else if (mob.search(/[6-9]/) == -1) {
//       err5.innerHTML = "its not mobile number";
//       err5.style.color = "red";
//     }
//     else {
//       err5.innerHTML = "";
//     }

//     if (mail.search(/[@]/) == -1) {
//       err6.innerHTML = "*enter @";
//       err6.style.color = "red"
//     }
//     else {
//       err6.innerHTML = " ";
//     }
//   }

// export default validation;