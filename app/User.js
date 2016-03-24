
function User(email, password){
  this.username = 'defaultName';
  this.email = email;
  this.password = password;
  this.logged = false;
}

User.prototype.setUsername = function(username){
  this.username = username;
};

User.prototype.getUsername = function(){
  return this.username;
};

User.prototype.setPassword = function(password){
  this.password = password;
};

User.prototype.getPassword = function(){
  return this.password;
};

User.prototype.setEmail = function(email){
  this.username = email;
};

User.prototype.getEmail = function(){
  return this.email;
};

User.prototype.setLogged = function(logged){
  this.logged = logged;
};

User.prototype.getLogged = function(){
  return this.logged;
};
