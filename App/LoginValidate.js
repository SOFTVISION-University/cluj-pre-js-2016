var LOGIN_SUCCESFULLY = 0;
var INVALID_PASSWORD = 1;
var INVALID_USERNAME = 2;

var usernameJson = JSON.parse(usersJSON);
console.log(usernameJson);
// Users class
function User(data) {
  this.name = data.userName;
  this.email = data.email;
  this.password = data.password;
}
//end User class


// AccountService class
function AccountService(username , password) {
  this.username = username;
  this.password = password;
  this.usersArray = [];
}
AccountService.prototype.setUsername = function(username){
  this.username = username;
}
AccountService.prototype.setPassword = function(password){
  this.password = password;
}
AccountService.prototype.addUser = function(user){
  this.usersArray.push(user);
}
AccountService.prototype.checkLogin = function(){
  var toReturn = false;
  for (var i = 0; i < this.usersArray.length; i++) {
    var tempUser = this.usersArray[i];
    console.log(tempUser.userName," ? ", this.username);
    if(tempUser.userName === this.username)
    {
      if(tempUser.password === this.password){
        return LOGIN_SUCCESFULLY;
        // break;
      }
      else{
        return INVALID_PASSWORD;
      }
    }
    else {
      return INVALID_USERNAME;
    }
  }
  // return toReturn;
}

// end AccountService class

var accountService = new AccountService();
for (var i = 0; i < usernameJson.length; i++) {
  var user = new User(usernameJson[i]);
  accountService.addUser(user);
}

function validate()
{
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  accountService.setUsername(username);
  accountService.setPassword(password);

  if (accountService.checkLogin() === LOGIN_SUCCESFULLY)
  {
    alert ("Login successfully");
    showLoginSucces();
  }
  else if (accountService.checkLogin() === INVALID_PASSWORD){
      showInvalidPasswod();
  }
  else if(accountService.checkLogin() === INVALID_USERNAME){
    showInvalidUsername();
  }
}

function showInvalidPasswod(){
   document.getElementById("username").style.backgroundColor = "rgba(200,0,0,0.3)";
   document.getElementById("username").style.borderColor = "#ff0000";
   document.getElementById("username").style.borderStyle = "solid";
   document.getElementById("username").style.borderWidth = "1px";
 }
 function showInvalidUsername(){
   document.getElementById("password").style.backgroundColor = "rgba(200,0,0,0.3)";
   document.getElementById("password").style.borderColor = "#ff0000";
   document.getElementById("password").style.borderStyle = "solid";
   document.getElementById("password").style.borderWidth = "1px";
 }

function showLoginSucces(){
     document.getElementById("username").style.backgroundColor = "#D8E7F5";
     document.getElementById("username").value = "";
     document.getElementById("username").style.borderWidth = "0px";

     document.getElementById("password").style.backgroundColor = "#D8E7F5";
     document.getElementById("password").style.borderWidth = "0px";
     document.getElementById("password").value = "";
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
