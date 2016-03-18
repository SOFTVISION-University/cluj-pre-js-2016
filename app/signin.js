document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('playlist').onclick=function(){

    document.getElementById('popup').style.visibility="visible";
  }

  document.getElementById('close-icon').onclick=function(){

    document.getElementById('popup').style.visibility="hidden";
  }

  document.getElementById('signin').onclick=function(){
    document.location.href="file:///home/robert.cosma/work/cluj-pre-js-2016/app/login.html";
  }

});
