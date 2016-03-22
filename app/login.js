
var usersJSON = '[{"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"},{"userName":"whitley","email":"kathywhitley@quailcom.com","password":"inson2079"},{"userName":"fletcher","email":"kathyfletcher@quailcom.com","password":"rederick8363"}]';
var users=JSON.parse(usersJSON);



function AccountService(data){

 }

AccountService.prototype.validate=function(mail,password){

 												if ( mail == this.email && password == this.password){
 														 window.location="index.html";
 														 }
 												else
 												error_msg();

                       }


function beggin(){
	var mail = document.getElementById("e-mail").value;
	var password = document.getElementById("pass");




}



function error_msg(){
	document.getElementById("error_message").innerHTML = "Oops!That email/password combination is not valid.";
  document.getElementById("e-mail").className = "input_wrong";


}
