document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('second-button').onclick=function(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
});
