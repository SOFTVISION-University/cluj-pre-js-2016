var jsonUsers = JSON.parse(usersJSON);

function Users(){

 this.allUsers = this.getAllUsers();
};

// returns boolean
Users.prototype.checkedByType = function(type,objectKey){

  var bool = false;

  var all_users = this.allUsers;

   for(var i=0; i < all_users.length; i++){

      var user = all_users[i];

     if(user[type] === objectKey)
      return bool = true;
   }
 return bool;
};

// returns array of all users//
Users.prototype.getAllUsers = function () {
  var local_users = [];
  for (var i=0; i < jsonUsers.length;i++)
  {
      var person = jsonUsers[i];
      local_users.push(this.createUser(person.userName,person.email,person.password));
  };
    return local_users;
}
/// create object of type user/////

Users.prototype.createUser = function (name,email,password){

return new User(name,email,password);

};

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
