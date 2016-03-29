var currentUser =  new Users(usersFromParse);


function validateForm(){

  // var eml = document.loginForm.Email.value;
  // var pwd = document.loginForm.password.value;
  var eml = users.getEmail();
  var pwd = users.getPassword();

  for(var i = 0; i < usersFromParse.length; i++){

    if((eml == usersFromParse[i].email) && (pwd == usersFromParse[i].password)){
      console.log('1');
      window.location.assign = ("file:///home/dora.oroian/work/cluj-pre-js-2016/App/aplicatie.html");
      break;
    }
    else{
      console.log('2');
      window.alert("Login failed. Please check username, password or email.");
      break;
    }
  }
}
