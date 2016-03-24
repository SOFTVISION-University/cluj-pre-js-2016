var users = JSON.parse(usersJSON);

function AccountService() {

}

AccountService.prototype.checkLogin = function ( email , password ) {

  var check = "0" ;

  for ( i = 0 ; i < users.length ; i ++ ) {

    if ( email == users[i].email && password == users[i].password ) {

      localStorage.setItem("userData", JSON.stringify(users[i].email));

      return check = "1" ;

      break ;

    } else {

        if ( email == users[i].email && password != users[i].password ) {

            return check = "2" ;

            break;
        }
    }

  }

  return check;
}

var accountService = new AccountService() ;
