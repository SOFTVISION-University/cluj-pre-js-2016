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
  console.log("AS username:"+this.username);
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
  var userFound = this.usersArray.filter(function(user){
    if(user.name === username && user.password === password)
    {
      return user;
    }
  });

  if (userFound.length>0)
  {
    AccountService._instance.loggedUser = userFound[0];
    AccountService._instance.loggedUser.logged = true;
    localStorage.setItem("nameUser1", JSON.stringify(AccountService._instance.loggedUser));

    return LOGIN_SUCCESFULLY;
  }
  else {
    return INVALID_USERNAME;
  }
};
