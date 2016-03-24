var jsonUsers = JSON.parse(usersJSON);

var userData = new DataController();
userData.setUrlLocation(usersJSON);
userData.setSaveName("users");

function Users(){

 this.allUsers = this.getAllUsers();
}

//set user state ////

Users.prototype.setUserState = function(email,state){

  var localUsers = this.allUsers;

  for(var i=0; i < localUsers.length; i++){

      if(localUsers.email === email)
      {
         localUsers.setLoginState(state);
      }
    }
};
// returns boolean
Users.prototype.checkedByType = function(type,objectKey){


  var localUsers = this.allUsers;
   for(var i=0; i < localUsers.length; i++){

      var user = localUsers[i];

     if(user[type] === objectKey)
      return true;
   }
 return false;
};

// returns array of all users//
Users.prototype.getAllUsers = function () {

  var thisOfUsers = this;

  var mapFunction = function(val){

      return  thisOfUsers.createUser(val.name, val.email, val.password);
    };

    return userData.returnData().map(mapFunction);
};

/// create object of type user/////
Users.prototype.createUser = function (name,email,password){

return new User(name,email,password);

};

// push new user in all users;
Users.prototype.addNewUser = function (name,email,password) {

    this.allUsers.push(this.createUser(name,email,password));
};


// returns boolean
Users.prototype.checkedByEmail = function(email){

  return this.checkedByType("email",email);
};
// returns boolean
Users.prototype.checkedByPassword = function(password){

  return this.checkedByType("password",password);
};

var usersClass = new Users();
