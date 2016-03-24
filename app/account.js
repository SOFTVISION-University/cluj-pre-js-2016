function AccountService(){
  this.persons = [];
  this.accountStatus = "";

}

AccountService.prototype={

  getPersons:function(){
    return this.persons;
  },

  setPersons:function(persons){
    this.persons=persons;
  },

  getAccountStatus:function(){
    return this.accountStatus;
  },

  setAccountStatus:function(accountStatus){
    this.accountStatus="";
  },


};

  var loadingWnd;

function openWindow(url){

  if(loadingWnd === undefined){

    loadingWnd = window.open(url,'myFrame');}

  else {

    loadingWnd.focus();
  }

};

function LogIn(){

  var usersJSON = '[{"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"},{"userName":"whitley","email":"kathywhitley@quailcom.com","password":"inson2079"},{"userName":"fletcher","email":"kathyfletcher@quailcom.com","password":"rederick8363"}]';
  var users = JSON.parse(usersJSON);
  var userObj = { email: "", password: "" };

  var emailIntroduced = document.getElementById('email').value;
  var passIntroduced = document.getElementById('password').value;
  userObj.email = emailIntroduced;
  userObj.password = passIntroduced;

  for (var i=0; i<users.length; i++){

        console.log(userObj);
      if (users[i].email===userObj.email && users[i].password===userObj.password){


          return openWindow("file:///home/bogdan.roman/work/cluj-pre-js-2016/app/main.html");
        }

    }
      alert("Login credentials incorrect");
};

function LogOut(){};
