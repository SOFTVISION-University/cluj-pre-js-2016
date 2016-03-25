function AccountService(path){
  this._users = [];
  var userObj = new User(path);
  //replace for with map
  this._users = path.map(function(userObj){
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
