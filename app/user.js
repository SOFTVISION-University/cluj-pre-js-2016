function User(path){
  this._userName = path.userName;
  this._email = path.email;
  this._password = path.password;
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
