
var usersJSON = '[{"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"},{"userName":"whitley","email":"kathywhitley@quailcom.com","password":"inson2079"},{"userName":"fletcher","email":"kathyfletcher@quailcom.com","password":"rederick8363"}]';
var users = JSON.parse(usersJSON);

var accountService ;

function onLoad() {

  accountService= new AccountService();
    var addUser=function (a){
    var newU = new Member(a);
    accountService.addUsers(newU);
  };

   users.forEach( addUser );

}


function Beggin() {

  var mail = document.getElementById("e-mail").value;
  var password = document.getElementById("pass").value;
  Control(mail,password);
  return false;
}

function Control (mail,password) {

  var value_of_verification=accountService.isUserRegistered(mail,password);

  if (value_of_verification === "ERROR"){
    document.getElementById("error_message").innerHTML=
     "Oops!That email/password combination is not valid.";
    document.getElementById("e-mail").className = "input_wrong";
    document.getElementById("pass").className = "input_wrong";


  }
  else
    window.location.href = 'index.html';



}
