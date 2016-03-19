var playlists=JSON.parse(playlistsJSON);
var users=JSON.parse(usersJSON);

function copyright(){
  var d=new Date();
  var year=d.getFullYear();
  document.getElementById('copyright').innerHTML="&copy; "+year+
  " ACME DIVISION ALL RIGHTS RESERVED";
}

function copyrighthome(){
  var d=new Date();
  var year=d.getFullYear();
  document.getElementById('copyrighthome').innerHTML="&copy; "+year+
  " ACME DIVISION ALL RIGHTS RESERVED";
}

function goTop(){
  document.body.scrollTop=0;
  document.getElementById("your_name").focus();
}

function explorePlaylist(){
  document.getElementById('playlist').className="playlist-expand";
}

function closePlaylist(){
  document.getElementById('playlist').classList.remove("playlist-expand");
}

function getFocus(input){
  input.style.backgroundColor="rgba(0,191,255,0.1)";
  input.style.borderColor="rgb(0,191,255)";
  input.style.borderStyle="solid";
  input.style.borderWidth="1px";
}

function getBlur(input){
  input.style.backgroundColor="rgba(128,128,128 ,0.2)";
  input.style.borderWidth="1px";
  input.style.borderColor="rgba(128,128,128 ,0.2)";
}

function validateUser(){
  var bool=false;
  var email= document.getElementById('email').value;
  var password= document.getElementById('password').value;
  for(var i=0; i<users.length; i++){
    if(users[i].email==email && users[i].password==password){
      window.location = "C:/work/cluj-pre-js-2016/app/home.html";

    }else{
      document.getElementById('error').innerHTML="Oops! That email/password combination is not valid."
      document.getElementById('email').style.backgroundColor="rgba(255,0,0,0.1)";
      document.getElementById('email').style.borderColor="rgb(255,0,0)";
      document.getElementById('email').style.borderStyle="solid";
      document.getElementById('email').style.borderWidth="1px";
      document.getElementById('password').style.backgroundColor="rgba(255,0,0,0.1)";
      document.getElementById('password').style.borderColor="rgb(255,0,0)";
      document.getElementById('password').style.borderStyle="solid";
      document.getElementById('password').style.borderWidth="1px";
      bool=false;
    }
    return bool;
  }

}
