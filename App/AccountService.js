var currentUser =  new Users(usersFromParse);
// var user = document.loginForm.Name.value;
// console.log(user);

function validateForm(){
  console.log('1');
  // var user = document.loginForm.Name.value;
  var eml = document.loginForm.Email.value;
  var pwd = document.loginForm.password.value;
  console.log(currentUser);
  for(var i = 0; i < usersFromParse.length; i++){
    console.log(usersFromParse[i].userName);
    if((eml == usersFromParse[i].email) && (pwd == usersFromParse[i].password)){
      console.log('1');
      window.location.assign = ("http://www.google.com");
      break;
    }
    else{
      console.log('2');
      window.alert("Login failed. Please check username, password or email.");
      break;
    }
  }
}
