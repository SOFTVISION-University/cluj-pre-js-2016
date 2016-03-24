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

//// FUNCTION TO CHECK LOCAL STORAGE

function localStorageExistance(){
  if(localStorage.getItem("users"))
  {
    users = localStorage.getItem("users");
  }
  else {
    users = [];
  }
};
///////
var accountService = new AccountService();
