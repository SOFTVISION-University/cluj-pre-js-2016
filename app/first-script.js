function focus1 (){
document.getElementById('focuss').focus();
}

function change() {
    document.getElementById("focuss").style.backgroundColor = "#ADD8E6";
}



//pt playlist-page, de mutat in alt script
document.getElementById("lista").onclick = function() {myFunction()};

function listMel() {
  document.getElementById("lista").classList.toggle("show");
}
