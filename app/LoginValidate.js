const LOGIN =0;
const INVALID_PASSWORD =1;
const INVALID_USERNAME =2;

const username= JSON.parse(usersJSON);
//console.log(username);

function User(path){
  this.name= path.userName;
  this.email=path.email;
  this.password=path.password;
}

function AccountService(){
  this.username="";
  this.password="";
  this.usersArray=[];
}

AccountService.prototype.setUsername= function(username){
  this.username=username;
}

AccountService.prototype.setPassword = function(password){
  this.password=password;
}

AccountService.prototype.setPassword = function(user){
  this.usersArray.push(user);
}


AccountService.prototype.checkLogin = function(){
  const toReturn =false;
  for (const i = 0; i < this.usersArray.length; i++) {
    const tempUser=this.usersArray[i];

    if(tempUser.userName==this.username)
    {
        if(tempUser.password==this.password){
          toReturn=LOGIN;
          break;
        }
      else{
        toReturn=INVALID_PASSWORD;
      }
    }
    else{
      toReturn=INVALID_USERNAME;
    }

  }
  return toReturn;
}

function validate()
{
  const username= document.getElementById("username").value;
  const password= document.getElementById("password").value;
  AccountService.setUsername(username);
  AccountService.setPassword(password);

  if(AccountService.checkLogin()==0){

    alert ("Login successfully");
    return false;
  }
  else{
    document.getElementById("username").style.backgroundColor="rgba(200, 0, 0, 0.3)";
  }
}
