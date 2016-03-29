function AccountService() {

}

AccountService.prototype.signUp = function(name,email,password){


  if(!usersClass.checkedByEmail(email)){
        usersClass.addNewUser(name,email,password);
    return false;
    }
  return true;
};

AccountService.prototype.signIn = function (email,password){

    if(usersClass.checkedByEmail(email) &&  usersClass.checkedByPassword(password))
    {
        usersClass.setUserState(email , true);
        return true;
    }
    return false;
};

///////
var accountService = new AccountService();
