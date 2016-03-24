var allUsersList = JSON.parse(usersJSON);

var email;
var password;

function LoggedIn(){
  alert('Logged in!');

  // var fso = new ActiveXObject("Scripting.FileSystemObject");
  // var a = fso.CreateTextFile("/home/vlad.mararu/work/cluj-pre-js-2016/app/test.txt", true);
  // a.WriteLine('User logeed in now!');
  // a.Close();
}

function LoggedOut(){
  user1.setLogged(false);
  alert('Logged out');
}

function checkLogin(){
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;

  var user1 = new User(email, password);


  for(var i = 0; i < allUsersList.length; i++){
    var emailFromJson = allUsersList[i].email;
    var passwordFromJson = allUsersList[i].password;

    if (user1.getEmail() == emailFromJson && user1.getPassword() == passwordFromJson){
      localStorage.setItem("userData", JSON.stringify(allUsersList[i]));
      user1.setLogged(true);
      return true;
    }
    return false;
  }
}
