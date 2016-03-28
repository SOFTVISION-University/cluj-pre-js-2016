function AccountService(usersList){
  this._users = [];
  var userObj = new User(usersList);
  //replace for with map
  this._users = usersList.map(function(userObj){
    return userObj;
  });
}

AccountService.prototype.getUsers = function(){
  return this._users;
}

AccountService.prototype.displayLoginError = function(){
  document.getElementById('error').innerHTML = "Oops! That email/password combination is not valid.";
  document.getElementById('email').className = "login-error";
  document.getElementById('password').className = "login-error";
};

AccountService.prototype.login = function(){
  alert("You have successfully logged in!")
}

AccountService.prototype.logout = function(){
  alert("You have successfully logged out!")
}
