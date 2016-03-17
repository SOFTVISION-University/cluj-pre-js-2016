document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('playlist').onclick=function(){

    document.getElementById('popup').style.visibility="visible";
  }

  document.getElementById('close-icon').onclick=function(){

    document.getElementById('popup').style.visibility="hidden";
  }

});
