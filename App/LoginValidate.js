

function validate()
{
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ( username == "username" && password == "password")
  {
    alert ("Login successfully");
    window.location = "index.html";
    return false;
  }
  else {

     document.getElementById("username").style.backgroundColor="rgba(200,0,0,0.3)";
     document.getElementById("username").style.borderColor="#ff0000";
     document.getElementById("username").style.borderStyle="solid";
     document.getElementById("username").style.borderWidth = "1px";

     document.getElementById("password").style.backgroundColor="rgba(200,0,0,0.3)";
     document.getElementById("password").style.borderColor="#ff0000";
     document.getElementById("password").style.borderStyle="solid";
     document.getElementById("password").style.borderWidth = "1px";
     var r=confirm("try again");
     if (r==true)
     {
       document.getElementById("username").style.backgroundColor="#D8E7F5";
       document.getElementById("username").value="";
       document.getElementById("username").style.borderWidth = "0px";

       document.getElementById("password").style.backgroundColor="#D8E7F5";
       document.getElementById("password").style.borderWidth = "0px";
       document.getElementById("password").value="";
     }
  }
}
