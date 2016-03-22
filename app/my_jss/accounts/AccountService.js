

function AccountService() {

};

AccountService.prototype.signUp = function(name,email,password){
  var bool = false;

  if(!usersClass.checkedByEmail(email)){
        usersClass.addNewUser(name,email,password);
  }
  else {
      bool = true;
  }
  return bool;
};

AccountService.prototype.signIn = function (email,password){

    var bool=false;
    if(usersClass.checkedByEmail(email) &&  usersClass.checkedByPassword(password))
    {
        bool = true;
    }
    return bool;
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
