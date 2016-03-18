function goOnTop(){
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  document.getElementById("id").focus();
}

function unhidePlaylist(){

    document.getElementById("playlist").style.visibility = "visible";
}

function closePlaylist(){
    document.getElementById("playlist").style.visibility = "hidden";
}
