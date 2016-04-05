var usersJSON = '[{"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"},{"userName":"whitley","email":"kathywhitley@quailcom.com","password":"inson2079"},{"userName":"fletcher","email":"kathyfletcher@quailcom.com","password":"rederick8363"}]';


var usersFromParse = JSON.parse(usersJSON);
console.log(usersJSON);
 // for(var i = 0; i<=usersFromParse.length; i++){
 //  users.push( new Users(usersFromParse[i]) );
 // }

function Users(path){
  this.userName = path.userName;
  this.email = path.email;
  this.password = path.passowrd;
}

Users.prototype.getUserName = function(){
  return userName;
};

Users.prototype.getEmail = function(){
  return email;
};

Users.prototype.getPassword = function(){
  return password;
};

Users.prototype.setUserName = function(){
  this.userName = userName;
};

Users.prototype.setEmail = function(){
  this.email = email;
};

Users.prototype.setPassword = function(){
  this.password = password;
};





var currentUser =  new Users(usersFromParse);


function validateForm(){

  var eml = document.loginForm.Email.value;
  var pwd = document.loginForm.password.value;
  // var eml = users.getEmail();
  // var pwd = users.getPassword();

  for(var i = 0; i < usersFromParse.length; i++){

    // if((eml == usersFromParse[i].email) && (pwd == usersFromParse[i].password)){
    if((eml == currentUser.getEmail()) && (pwd == currentUser.getPassword())){
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

// export { validateForm };
