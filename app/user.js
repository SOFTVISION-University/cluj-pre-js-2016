/*-----------User Class Implementation----------------------------------*/

function User(name,email,password){
  this.name = name;
  this.email = email;
  this.password = password;
  this.isLoggedIn = false;
}
// User Class Methods
User.prototype.getName=function(){
  return this.name;
};

User.prototype.setName=function(name){
  this.name=name;
};

User.prototype.getEmail=function(){
  return this.email;
};

User.prototype.setEmail=function(email){
  this.email=email;
};
User.prototype.getPassword=function(){
  return this.password;
};

User.prototype.setPassword=function(password){
  this.password=password;
};

User.prototype.getLoginStatus = function(){
  return this.isLoggedIn;
};

User.prototype.login = function(){
  this.isLoggedIn = true;
  localStorage.setItem("loggedInUser", this.email);
};

User.prototype.logout = function(){
  this.isLoggedIn = false;
  localStorage.setItem("loggedInUser", null);
};
