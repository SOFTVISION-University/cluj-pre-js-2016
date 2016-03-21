

  function signupfree(){

    document.getElementById('second-button').onclick=function(){
      
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      document.forms['form'].elements['firstname'].focus();
    }

  }
