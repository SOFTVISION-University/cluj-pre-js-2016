
// focus pe formularul de singn-up
function focus1 (){
document.getElementById('focuss1').focus();
}


// schimba culoarea la click pt formular
function change(ids) {
  var x = document.getElementById(ids);
  if(x !== null){
    x.style.backgroundColor = "#ADD8E6";
  }
}

function changeBack(ids) {
  var x = document.getElementById(ids);
  if(x !== null){
    x.style.backgroundColor = "#A9A9A9";
  }
}
