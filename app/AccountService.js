var playlistsArray = JSON.parse(usersJSON);

var email;
var password;

function checkLogin(){
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;

  var user1 = new User(email, password);

  for(var i = 0; i < playlistsArray.length; i++){
    var emailFromJson = playlistsArray[i].email;
    var passwordFromJson = playlistsArray[i].password;

    if (user1.getEmail() == emailFromJson && user1.getPassword() == passwordFromJson){
      LoggedIn();
      return true;
    }
    return false;
  }
}


function LoggedIn(){
  user1.setLogged(true);
  alert('succes!');
  // var fso = new ActiveXObject("Scripting.FileSystemObject");
  // var a = fso.CreateTextFile("/home/vlad.mararu/work/cluj-pre-js-2016/app/test.txt", true);
  // a.WriteLine('User logeed in now!');
  // a.Close();

}

function LoggedOut(){
  user1.setLogged(false);
}
