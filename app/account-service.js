

function AccountService() {

  var ERROR_MESSAGE = "ERROR";
  var message="ERROR";
  this.members = [];



 }

AccountService.prototype.isUserRegistered = function (mail,password) {

  var control = function(a) {

    if ( mail === a.email  &&
    password === a.password)
      return a;
  };

  var  User_check = this.members.filter (control);

  if (User_check.length == 1) {
    localStorage.setItem('testObject', JSON.stringify(User_check[0]));
    User_check[0].user_login = true;
    return "ok";
  }
  return "ERROR";
};

AccountService.prototype.addUsers = function (user) {
  this.members.push(user);

};

AccountService.prototype.checkEmail = function (mail) {
  var control = function(a) {

    if ( mail === a.email){
      return a;
    }
  };

  var User_mail = this.members.filter(control);

  if  (User_mail.length > 0)
    return "ERROR";
  return "ok";

};
