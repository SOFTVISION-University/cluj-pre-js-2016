
var usersArray = JSON.parse(usersJSON);

function checkLogin(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var userFiltered = usersArray.filter(function(obj){
    if(obj.email === usersArray.email && obj.password === usersArray.password){
      return obj;
    }
  });

  if (userFiltered.length !== 0){
      localStorage.setItem('userData', JSON.stringify(userFiltered[0]));
      return true;
    }
    return false;
}



// function checkLogin(){
//   var email = document.getElementById('email').value;
//   var password = document.getElementById('password').value;
//
//   for(var i = 0; i < usersArray.length; i++){
//     if(usersArray[i].email === email && usersArray[i].password === password){
//       localStorage.setItem('userData', JSON.stringify(usersArray[i]));
//       return true;
//     }
//     return false;
//   }
// }

function LogOut(){
  localStorage.setItem('userData', null);
}
