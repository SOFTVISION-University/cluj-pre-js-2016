function AccountService(){

}

AccountService.prototype.displayLoginError = function(){
  var bool;
  document.getElementById('error').innerHTML="Oops! That email/password combination is not valid."
  document.getElementById('email').style.backgroundColor="rgba(255,0,0,0.1)";
  document.getElementById('email').style.borderColor="rgb(255,0,0)";
  document.getElementById('email').style.borderStyle="solid";
  document.getElementById('email').style.borderWidth="1px";
  document.getElementById('password').style.backgroundColor="rgba(255,0,0,0.1)";
  document.getElementById('password').style.borderColor="rgb(255,0,0)";
  document.getElementById('password').style.borderStyle="solid";
  document.getElementById('password').style.borderWidth="1px";
  bool = false;
}
