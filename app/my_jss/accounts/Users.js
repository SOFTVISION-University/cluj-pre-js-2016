var userData = new DataController();
userData.setUrlLocation(usersJSON);
userData.setSaveName("users");

function Users(){

 this.allUsers = this.getAllUsers();
}
// returns array of all users//
Users.prototype.getAllUsers = function () {

  var localUsersArray = [];
  var thisOfUsers = this;

   userData.returnData().forEach(function(val){
      localUsersArray.push(thisOfUsers.createUser(val.name, val.email, val.password));
   });

    return localUsersArray;
};
Users.prototype.returnUsers = function() {
  return this.allUsers;
};
//set user state ////

Users.prototype.setUserState = function(email,state){

  var searchUserByEmail = function(user){

      if(user.email === email)
      {
         user.setLoginState(state);
      }
  };

  this.allUsers.filter(searchUserByEmail);
};
// returns boolean
Users.prototype.checkedByType = function(type,dataReceived){

  var searchUserByType = function(user){
          return user[type] === dataReceived;
  };
  return this.allUsers.filter(searchUserByType).length > 0 ? true : false;
};

/// create object of type user/////
Users.prototype.createUser = function (name,email,password){

return new User(name,email,password);

};

// push new user in all users;
Users.prototype.addNewUser = function (userObject) {

    this.allUsers.push(userObject);
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
