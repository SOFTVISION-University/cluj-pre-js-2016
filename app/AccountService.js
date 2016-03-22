/*-----------AccountService Class Singleton Implementation----------------------------------*/

var AccountService = {
  // array with already registered users
  registeredUsers:[],
  // AccountService Class Methods
  signIn:function(email,password){
    var user = this.returnUserIfExists(email);
    if (user != null && (user.getPassword()==password)){
      user.login();
      return "Login Succesful";
    }
    return "Email or password incorrect. Check for typos!";
  },

  returnUserIfExists: function(mail){
    for (var i=0;i<this.registeredUsers.length;i++){
      var user = this.registeredUsers[i];
      if(user.getEmail()==mail){
        return user;
      }
    }
    return null;
  },
  // function implemented to retrieve logged in user saved in local storage
  getLoggedInUser: function(){
    //bla bla to be continued..
  }
};
