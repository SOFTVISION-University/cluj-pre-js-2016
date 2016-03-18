var users;

function createAccount(){
  var obj,message;
 localStorageExistance();

  message = document.getElementById('textFormMessage');

  if(checkExistance())
  {
    console.log(message);
    message.innerHTML = "Email account allready exits";
    message.style.color = "red";
    return false;
  }

  message.innerHTML = "Account created";
  message.style.color = "green";
 // adding new user of type object in users array ////
 obj = {};
 obj = {
  name: document.getElementById('sign-up-name').value,
  email:document.getElementById('sign-up-email').value,
  password:document.getElementById('sign-up-password').value
}
 users.push(obj);
 localStorage.setItem("users",users);
return false;
};

function localStorageExistance(){
  if(localStorage.getItem("users"))
  {
    users = localStorage.getItem("users");
  }
  else {
    users = [];
  }
}

function checkExistance(){
  
 console.log(users.length);
  for(var i=0; i < users.length;i++)
  {
    console.log(users[i].email);
    if(users[i].email === document.getElementById('sign-up-email')){
      return true;
    }
    else{
      return false;
    }
  }
}
function UpPage(){
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}
