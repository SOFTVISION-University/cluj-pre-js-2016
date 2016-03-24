function AccountService(){
  this.username=data.username;
  this.email=data.username;
  this.password=data.password;
}

// function register(){
//   var username = document.forms["registerForm"]["username"].value;
//   var mail = document.forms["registerForm"]["email"].value;
//   var pas = document.forms["registerForm"]["password"].value;
//
// }
document.addEventListener("DOMContentLoaded", function(event){
  var x= localStorage.getItem("userData");
  if( x !== null){
    document.getElementById('searchLogOut').visibility = 'visible';
    document.getElementById('searchLogIn').visibility = 'hidden';
  }else{
    document.getElementById('searchLogOut').visibility = 'hidden';
    document.getElementById('searchLogIn').visibility = 'visible';
  }
});
