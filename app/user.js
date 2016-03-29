function User(usersList){
  this._userName = usersList.userName;
  this._email = usersList.email;
  this._password = usersList.password;
}


User.prototype.getUserName = function(){
  return this._userName;
};

User.prototype.getEmail = function(){
  return this._email;
};

User.prototype.getPassword = function(){
  return this._password;
};

User.prototype.setUserName = function(userName){
  this._userName = userName;
};

User.prototype.setEmail = function(email){
  this._email = email;
};

User.prototype.setPassword = function(password){
  this._password = password;
};
