// function AccountService(){
//   this.username = data.username;
//   this.email = data.username;
//   this.password = data.password;
// }
//
// // function register(){
// //   var username = document.forms["registerForm"]["username"].value;
// //   var mail = document.forms["registerForm"]["email"].value;
// //   var pas = document.forms["registerForm"]["password"].value;
// //
// // }
document.addEventListener("DOMContentLoaded", function(event){
  var x = localStorage.getItem("userData");
  var parsedLocalStorage = JSON.parse(x);
  var welcomeText = document.getElementById("welcomeText");
  console.log(x);
  if( x !== null){
    document.getElementById('searchLogOut').style.visibility = 'visible';
    document.getElementById('searchLogIn').style.visibility = 'hidden';
    document.getElementById('joinNowButton').style.visibility = 'hidden';
    welcomeText.innerHTML = "WELCOME " + "    "+ parsedLocalStorage.userName;
  }
});

function logOut(){
  localStorage.removeItem("userData");
  var welcomeText = document.getElementById("welcomeText");
  welcomeText.innerHTML = "";
  if(localStorage.length === 0){
    document.getElementById('searchLogOut').style.visibility = 'hidden';
    document.getElementById('searchLogIn').style.visibility = 'visible';
    document.getElementById('joinNowButton').style.visibility = 'visible';
  }
}
