
var usersArray = JSON.parse(usersJSON);


function validateFields(form){
  var sum;

  for(i in usersArray){
    var em = usersArray[i].email;
    var pw = usersArray[i].password;

    if(form.email.value == em && form.pwd.value == pw)
    { sum = true;
      window.open('app.html', '_self', true);
      break;
    }
    else
    {
     sum= false;
    }
  }
  if(sum == false){
    //showError();
    alert('Wrong credentials!');
  }
}

// function showError(){
//   var text = 'Error!';
//   document.getElementById('error-msg').appendChild(text);
// }
