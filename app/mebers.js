function Member(data) {

  this.userName = data.userName;
  this.email = data.email;
  this.password = data.password;
  this.user_login=false;
}

Member.prototype.getUser = function() {

  return this.userName;

};
Member.prototype.getEmail = function() {

  return this.email;

};
Member.prototype.getPassword = function() {

  return this.password;

};

Member.prototype.setUserName = function(user) {

  this.userName=user;

};
