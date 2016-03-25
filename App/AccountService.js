// AccountService class
function AccountService() {
  this.username = "";
  this.password = "";
  this.usersArray = [];
  this.loggedUser = JSON.parse(localStorage.getItem("nameUser1"));
}

AccountService._instance = null;

//singleton
AccountService.getInstance = function(){
  if(AccountService._instance === null)
  {
    AccountService._instance = new AccountService();
  }
  return AccountService._instance;
};

AccountService.prototype.setUsername = function(username){
  this.username = username;
};
AccountService.prototype.setPassword = function(password){
  this.password = password;
};
AccountService.prototype.addUser = function(user){
  this.usersArray.push(user);
};
AccountService.prototype.checkLogin = function(){
  var toReturn = false;

  var username = this.username;
  var password = this.password;
  var foundUser = this.usersArray.filter(function(user){
    if(user.name === username && user.password === password)
    {
      return user;
    }
  });

  if (foundUser.length > 0)
  {
    AccountService.getInstance().loggedUser = foundUser[0];
    AccountService.getInstance().loggedUser.logged = true;
    localStorage.setItem("nameUser1", JSON.stringify(AccountService.getInstance().loggedUser));

    return LOGIN_SUCCESFULLY;
  }
  else {
    return INVALID_USERNAME;
  }
};
