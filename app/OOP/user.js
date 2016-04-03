function User(usersList) {
  this._userName = usersList.userName;
  this._email = usersList.email;
  this._password = usersList.password;
}


User.prototype.getUserName = function getUserName() {
  return this._userName;
};

User.prototype.getEmail = function getEmail() {
  return this._email;
};

User.prototype.getPassword = function getPassword() {
  return this._password;
};

User.prototype.setUserName = function setUserName(userName) {
  this._userName = userName;
};

User.prototype.setEmail = function setEmail(email) {
  this._email = email;
};

User.prototype.setPassword = function setPassword(password) {
  this._password = password;
};
