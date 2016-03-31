function User(obj) {
  this.userName = obj.userName;
  this.email = obj.email;
  this.password = obj.password;
}

User.prototype.getUserName = function getUserName() {
  return this.userName;
};
User.prototype.getEmail = function getEmail() {
  return this.email;
};
User.prototype.getPassword = function getPassword() {
  return this.password;
};
User.prototype.setUserName = function setUserName(userName) {
  this.userName = userName;
};
User.prototype.setEmail = function setEmail(email) {
  this.email = email;
};
User.prototype.setPassword = function setPassword(password) {
  this.password = password;
};

export { User };
