var LOGIN_SUCCESFULLY = 0;
var INVALID_PASSWORD = 1;
var INVALID_USERNAME = 2;

var usernameJson = JSON.parse(usersJSON);

var accountService = AccountService.getInstance();

document.addEventListener("DOMContentLoaded", function(event) {

usernameJson.forEach(addUserToAccountService);

  });
function addUserToAccountService(userFromJS) {
  var user = new User(userFromJS);
  AccountService.getInstance().addUser(user);
}

function logOutUser() {
  localStorage.setItem("nameUser1", null);
  window.location.href = "index.html";
}


function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  AccountService.getInstance().setUsername(username);
  AccountService.getInstance().setPassword(password);
  var loginView =  new LoginView();

  switch (AccountService.getInstance().checkLogin()) {
    case LOGIN_SUCCESFULLY:

      loginView.showLoginSucces();
      window.location.href = "index.html";
    break;
    case INVALID_PASSWORD:
      loginView.showInvalidPasswod();
    break;
    case INVALID_USERNAME:
      loginView.showInvalidUsername();
    break;
    default:

  }
}
function focusOut(id){
  id.style.borderWidth = "0px";
  id.style.borderColor = "#D8E7F5";
}
function focusIt(id){
  id.style.borderWidth = "2px";
  id.style.borderColor = "#1AB8ED";
  id.style.borderStyle = "solid";
}
