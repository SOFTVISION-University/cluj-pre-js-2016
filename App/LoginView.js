function LoginView(){

}

LoginView.prototype.showInvalidUsername = function(){
  console.log("showInvalidUsername");
  document.getElementById("username").style.backgroundColor = "rgba(200,0,0,0.3)";
  document.getElementById("username").style.borderColor = "#ff0000";
  document.getElementById("username").style.borderStyle = "solid";
  document.getElementById("username").style.borderWidth = "1px";
};

LoginView.prototype.showInvalidPasswod = function(){
  document.getElementById("password").style.backgroundColor = "rgba(200,0,0,0.3)";
  document.getElementById("password").style.borderColor = "#ff0000";
  document.getElementById("password").style.borderStyle = "solid";
  document.getElementById("password").style.borderWidth = "1px";
};

LoginView.prototype.showLoginSucces= function(){
  console.log("showSucces");
  document.getElementById("username").style.backgroundColor = "#D8E7F5";
  document.getElementById("username").value = "";
  document.getElementById("username").style.borderWidth = "0px";

  document.getElementById("password").style.backgroundColor = "#D8E7F5";
  document.getElementById("password").style.borderWidth = "0px";
  document.getElementById("password").value = "";
};
