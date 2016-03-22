var Users= JSON.parse(usersJSON);

function User(path){
  this.user=path.userName;
  this.email=path.email;
  this.pass=path.password;
}
