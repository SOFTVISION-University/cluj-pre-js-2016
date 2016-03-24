

function AccountService() {

  var ERROR_MESSAGE = "ERROR";
  var message="ERROR";
  this.members = [];



 }

AccountService.prototype.validate = function (mail,password) {
/*  for (i = 0;i < this.members.length;i++){
    if ( mail === this.members[i].email  &&
         password === this.members[i].password) {
      window.location = "index.html";

      return  "OK";
    }

  }*/
  var control = function(a) {
    if ( mail === a.email  &&
    password === a.password) {
      return a;
    }
  };

  var  con = this.members.filter (control);

  con[0].user_login = true;
  localStorage.setItem('testObject', JSON.stringify(con[0]));


  if (con.length == 1)
    return "ok";
  return "ERROR";
};

AccountService.prototype.addUsers = function (user) {
  this.members.push(user);

};

AccountService.prototype.register = function () {

};
AccountService.prototype.checkUser = function (mail) {

/*  for (i = 0;i < this.members.length;i++) {
    if (this.members[i].mail === mail)
      return ERROR_MESSAGE;
    else
      return MESSAGE_OK;
    }*/
  var control = function(a) {
    if ( mail === a.email){
      return a;
    }
  };

  var con = this.members.filter(control);
  if  (con.lenth > 0)
    return "ERROR";
  return "ok";

};

AccountService.prototype.logIn = function () {


};
AccountService.prototype.logOut = function () {

    this.user_login = false;
};
AccountService.prototype.checkLogIng = function () {

    return this.user_login;
};
