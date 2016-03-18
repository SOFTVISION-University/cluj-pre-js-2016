/*function clicked(){

  var user = document.getElementById('email').value;
  var password = document.getElementById('password').value;

if(user != "" && password != ""){
      window.alert("welcome "+user)
    }
  } */

var utilizatori=JSON.parse(usersJSON);

function clicked(){


for(i=0 ; i<utilizatori.length ; i++){

  var  email=document.getElementById('email').value;
  var  password=document.getElementById('password').value;

  if(email == utilizatori[i].email) {
      window.alert("Welcome " + utilizatori[i].userName ); break;
    } else {
      window.alert("You are not registered. Need to Sign Up !"); break;
    }

  }




}
