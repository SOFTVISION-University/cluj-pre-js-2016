
function checkForUser(){

  var domEmail = document.getElementById("email_signIn").value;
  var domPass = document.getElementById("password_signIn").value;
  var message = document.getElementById("message");


  if(accountService.signIn(domEmail,domPass)){
      message.innerHTML = "You are loged in";
      message.style.color = "green";
      window.location.href = "index.html";
    }
    else {

      message.innerHTML = "Your email/password is wrong !";
      message.style.color = "red";

    };

 return false;

};

function createAccount(){

 var  message = document.getElementById('textFormMessage');
 var domName = document.getElementById("sign-up-name");
 var domEmail = document.getElementById("sign-up-email");
 var domPassword = document.getElementById("sign-up-password");

 if(accountService.signUp(domName,domEmail,domPassword)) {
    message.innerHTML = "Account created";
    message.style.color = "green";
      window.location.href = "login.html";
  }
  else {

    message.innerHTML = "Email account allready exits";
    message.style.color = "red";
  }
return false;
};
