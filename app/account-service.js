function AccountService() {

  var ERROR_MESSAGE = "ERROR";
  var MESSAGE_OK="OK";
  this.members = [];


 }

AccountService.prototype.validate = function(mail,password) {
  for (i = 0;i < this.members.length;i++){
    if ( mail === this.members[i].email  &&
         password === this.members[i].password) {
      window.location = "index.html";

      return  this.MESSAGE_OK;
    }

  }
  return "ERROR";
}

AccountService.prototype.addUsers = function(user) {
  this.members.push(user);

}

AccountService.prototype.register = function () {

}
AccountService.prototype.checkUser = function(userName) {

  for (i = 0;i < this.members.length;i++) {
    if (this.members[i].userName === userName)
      return ERROR_MESSAGE;
    else
      return MESSAGE_OK;


  }
}
