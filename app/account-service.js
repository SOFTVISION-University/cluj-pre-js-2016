var users = JSON.parse(usersJSON);

function AccountService() {
}

AccountService.prototype.checkLogin = function ( email , password ) {
  
  var check = "0" ;
  for ( var i = 0 ; i < users.length ; i ++ ) {
    if ( email == users[i].email && password == users[i].password ) {
      localStorage.setItem("userData", JSON.stringify(users[i].email));
      check = "1" ;
      break ;
    }
}
  return check;
}

var accountService = new AccountService() ;
