var LOGIN_SUCCESFULLY = 0;
var INVALID_PASSWORD = 1;
var INVALID_USERNAME = 2;

var usernameJson = JSON.parse(usersJSON);
// console.log(usernameJson);

var accountService = AccountService.getInstance();

document.addEventListener("DOMContentLoaded", function(event) {

  for (var i = 0; i < usernameJson.length; i++) {
    var user = new User(usernameJson[i]);
    // console.log("adduser");
    AccountService._instance.addUser(user);
    // console.log(accountService);
  }
  });


function logOutUser() {
  localStorage.setItem("nameUser1", null);
  window.location.href = "index.html";
}


function validate()
{
    //console.log(accountService.usersArray);
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  AccountService._instance.setUsername(username);
  AccountService._instance.setPassword(password);
  var loginView =  new LoginView();

  switch (AccountService._instance.checkLogin()) {
    case LOGIN_SUCCESFULLY:

      loginView.showLoginSucces();
      // console.log("ac UL:"+AccountService._instance.loggedUser);

      // console.log("localStor Validate:"+localStorage.getItem("nameUser1"));
      alert ("Login successfully");
      window.location.href = "index.html";
    break;
    case INVALID_PASSWORD:
      alert ("Login inc pass");
      loginView.showInvalidPasswod();
    break;
    case INVALID_USERNAME:
      alert ("Login inc username");
      loginView.showInvalidUsername();
    break;
    default:

  }
}



function focusOut(id){
  console.log(id);
  id.style.borderWidth = "0px";
  id.style.borderColor = "#D8E7F5";
}


function focusIt(id){
  console.log(id);
  id.style.borderWidth = "2px";
  id.style.borderColor = "#1AB8ED";
  id.style.borderStyle = "solid";
}
