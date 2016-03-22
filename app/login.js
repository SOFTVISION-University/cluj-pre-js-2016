
var usersJSON = '[{"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"},{"userName":"whitley","email":"kathywhitley@quailcom.com","password":"inson2079"},{"userName":"fletcher","email":"kathyfletcher@quailcom.com","password":"rederick8363"}]';
var users = JSON.parse(usersJSON);
var accountService;


function onLoad(){

      accountService=new AccountService();
      for(i=0;i<users.length;i++){
          var user = new Members(users[i]);
          accountService.addUsers(user);
      }

}


function Beggin(){

	              var mail = document.getElementById("e-mail").value;
	              var password = document.getElementById("pass").value;
                accountService.validate();
                return false;

//Oops!That email/password combination is not valid.
}
