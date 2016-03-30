  var userListParsed = JSON.parse(usersJSON);
  var nrOfUsers = userListParsed.length;


function User(data){
  this.userName = data.userName;
  this.email = data.email;
  this.password = data.password;
  this.isLogged = false;
}

var users = userListParsed.map(function(val){
    return new User(val);
});

User.prototype.setUserName = function(userName){
  this.userName = userName;
};
User.prototype.setEmail = function(email){
  this.email = email;
};
User.prototype.setPassword = function(password){
  this.password = password;
};
User.prototype.getUserName = function(userName){
  return this.userName;
};
User.prototype.getEmail = function(email){
  return this.email;
};
User.prototype.getPassword = function(password){
  return this.password;
};
