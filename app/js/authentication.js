var parseUsers = JSON.parse(usersJSON);

function Users(dataUsers){
  this.name = dataUsers.userName;
  this.email = dataUsers.email;
  this.pass = dataUsers.password;
}


function Authentication (){
  var nrUsers = parseUsers.length;
   var bool= true;
   var emailDiv= document.getElementById("formText1").value;
   var passDiv= document.getElementById("formText2").value;

    for (var i = 0; i < nrUsers; i++) {
          if (parseUsers[i].email == emailDiv)
               {
                 if(parseUsers[i].password == passDiv)
                   {
                     document.getElementById("mesageLogin").innerHTML = "login succes!!";
                     break;
                  }
                 else
                 {
                    document.getElementById("mesageLogin").innerHTML = "Incorect password!!";
                    bool=false;
                    break;

                 }
               }  else {
                  document.getElementById("mesageLogin").innerHTML = "is not a user!!";
                  bool=false;
                }

        }

  return bool;
}
