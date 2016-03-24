  var obj = JSON.parse(usersJSON);
  var l = obj.length;
  var users = [];

function User(data){
  this.userName = data.userName;
  this.email = data.email;
  this.password = data.password;
  this.logged=false;
}

for(i=0;i<l;i++){

  users[i] = new User(obj[i]);

}

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
