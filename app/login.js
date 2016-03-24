
var usersJSON = '[{"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"},{"userName":"whitley","email":"kathywhitley@quailcom.com","password":"inson2079"},{"userName":"fletcher","email":"kathyfletcher@quailcom.com","password":"rederick8363"}]';
var users = JSON.parse(usersJSON);

var accountService ;

function onLoad() {


  /*for (i = 0;i < users.length;i++) {
    var user = new Member(users[i]);
    accountService.addUsers(user);
  }*/
accountService= new AccountService();
  var addUser=function (a){
    var newU = new Member(a);
    accountService.addUsers(newU);
    return newU;
  };
  var userInitial = users.map ( addUser );




}


function Beggin() {

  var mail = document.getElementById("e-mail").value;
  var password = document.getElementById("pass").value;
  Control(mail,password);
  return false;
}

function Control (mail,password) {
  var val=accountService.validate(mail,password);
  if (val === "ERROR"){
    document.getElementById("error_message").innerHTML=
    "Oops!That email/password combination is not valid.";
     document.getElementById("e-mail").className = "input_wrong";
     document.getElementById("e-mail").style.backgroundColor = "red";
     document.getElementById("pass").className = "input_wrong";

  }
  else {
    accountService.logIn();

    

    //localStorage.store = accountService;
    window.location.href = 'index.html';
  }


}
