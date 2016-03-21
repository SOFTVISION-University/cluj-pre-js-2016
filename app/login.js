var users=JSON.parse(usersJSON);

function clicked(){


for (i = 0 ; i < users.length ; i++) {

  var  email = document.getElementById('email').value;
  var  password = document.getElementById('password').value;

  if (email == users[i].email) {

      window.alert("Welcome " + users[i].userName ); break;

    } else {

      window.alert("You are not registered. Need to Sign Up !"); break;
    }

  }

}
