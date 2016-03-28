var allUsersList = JSON.parse(usersJSON);
var totalNumberUsers = allUsersList.length;


var usersObjectCollection = allUsersList.map(function(obj){
  return new User(obj.userName, obj.email, obj.password);
});


function isLoggedIn(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var User1 = new User('default name', email, password);

  var userFiltered = usersObjectCollection.filter(function(userA){
    if(userA.email === User1.email && userA.password === User1.password){
      return User1;
    }
  });

  if (userFiltered.length !== 0){
      localStorage.setItem('userData', JSON.stringify(userFiltered[0]));
      User1.setUsername(userFiltered[0].username);
      User1.setLogged(true);
      return true;
    }
    return false;
}

function LoggedOut(){
  localStorage.setItem('userData', null);
}
