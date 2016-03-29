function checkUser () {

  var email = document.getElementById( 'email' ).value;

  var password = document.getElementById( 'password' ).value;

  var loginResult = accountService.checkLogin (email , password) ;

  switch ( loginResult ) {

    case "1" :  alert ( "Logged in !" ) ;

                return true;

                break;

    case "0" :  alert( "You are not a registered user . Need to sign up first !" );

                return false;

                break;

    }

  }


  /*if (  loginResult == "1" ) {

    alert ( "Logged in !" ) ;

     return true;

  }

  if( loginResult == "0" ) {

    alert( "You are not a registered user . Need to sign up first !" );

    return false;

  }

}*/
