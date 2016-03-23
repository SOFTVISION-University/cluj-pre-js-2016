function AccountService() {

  var ERROR_MESSAGE = "ERROR";
  var message="ERROR";
  this.members = [];
  this.user_login=false;


 }

AccountService.prototype.validate = function(mail,password) {
/*  for (i = 0;i < this.members.length;i++){
    if ( mail === this.members[i].email  &&
         password === this.members[i].password) {
      window.location = "index.html";

      return  "OK";
    }

  }*/
var control = function(a) {
  if ( mail === a.email  &&
       password === a.password){
       //window.location = "index.html";
       return "ok";
    }
  else {
    return "ERROR";
  }
}

  message = this.members.map(control);
  return message;
}

AccountService.prototype.addUsers = function(user) {
  this.members.push(user);

}

AccountService.prototype.register = function () {

}
AccountService.prototype.checkUser = function(mail) {

/*  for (i = 0;i < this.members.length;i++) {
    if (this.members[i].mail === mail)
      return ERROR_MESSAGE;
    else
      return MESSAGE_OK;
    }*/
  var control = function(a) {
    if ( mail === a.email){
         return "ERROR";
      }
  }

    this.message = this.members.map(control);
    return this.message;
}

AccountService.prototype.logIn = function () {

    this.user_login=true;
}
AccountService.prototype.logOut = function () {

    this.user_login=false;
}
AccountService.prototype.checkLogIng = function () {

    return this.user_login;
}
