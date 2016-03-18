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
  email= document.getElementById('email');
  password= document.getElementById('password');
  for(var i=0; i<users.length; i++){
    if(users[i].email!=email && users[i].password!=password){
      document.getElementById('error').innerHTML="Oops! That email/password combination is not valid."
      return false;
    }
  }
}
