function AccountService(){
  this.username= "";
  this.password= "";
  this.usersArray= [];
  this.loggedUser=null;
}

AccountService.getInstance = function(){
  if(AccountService._instance = null)
    {
      AccountService._instance = new AccountService();
    }
    return AccountService_.instance;
}

AccountService.prototype.setUsername = function(username){
  this.username= username;
}

AccountService.prototype.setPassword = function(password){
  this.password=password;
}


AccountService.prototype.getUsername = function(){
  return username;
}

AccountService.prototype.getPassword = function(){
  return password;
}

AccountService.prototype.addUser = function(user){
  this.usersArray.push(user);
}
AccountService.prototype.checkLogin = function(){
  var toReturn = false;
  var username = this.username;
  var password= this.password;
  var userFound = this.usersArray.filter(function(user){
    if(user.name ===username && user.password === password)
    {
      return user;
    }
  });

  if (userFound.length>0)
  {
    this.loggedUser= userFound[0];
    this.loggedUser.logged = true;
    return LOGIN_SUCCESFULL;
  }
  else{
    return INVALID_USERNAME;
  }
};
