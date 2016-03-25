function User(data) {
  this.name = data.userName;
  this.email = data.email;
  this.password = data.password;
  this.logged = false;
}

User.prototype.getUserName = function(){
  return this.name;
};
