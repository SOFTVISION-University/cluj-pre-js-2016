var usersFromParse = JSON.parse(usersJSON);
for(var i = 0; i<=usersFromParse.length; i++){

}

function Users(path){
  this.userName = userName;
  this.email = email;
  this.password = passowrd;
}

Users.prototype.getUserName(){
  return userName;
}

Users.prototype.getEmail(){
  return email;
}

Users.prototype.getPassword(){
  return password;
}

Users.prototype.setUserName(){
  this.userName = userName;
}

Users.prototype.setEmail(){
  this.email = email;
}

Users.prototype.setPassword(){
  this.password = password;
}
