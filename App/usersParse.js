var usersFromParse = JSON.parse(usersJSON);
console.log(usersJSON);
 for(var i = 0; i<=usersFromParse.length; i++){
  users.push( new Users(usersFromParse[i]) );
 }

function Users(path){
  this.userName = path.userName;
  this.email = path.email;
  this.password = path.passowrd;
}

Users.prototype.getUserName = function(){
  return userName;
};

Users.prototype.getEmail = function(){
  return email;
};

Users.prototype.getPassword = function(){
  return password;
};

Users.prototype.setUserName = function(){
  this.userName = userName;
};

Users.prototype.setEmail = function(){
  this.email = email;
};

Users.prototype.setPassword = function(){
  this.password = password;
};
