/*-----------AccountService Class Singleton Implementation----------------------------------*/

var AccountService = {
  // array with already registered users
  registeredUsers: [],
  // AccountService Class Methods
  signIn: function(email, password) {
    var user = this.returnUserIfExists(email);
    if (user !== null && (user.getPassword() == password)) {
      user.login();
      console.log("login succesful");
      return true;
    }
    console.log("ERROR");
    return false;
  },

  returnUserIfExists: function(mail) {
    for (var i = 0; i < this.registeredUsers.length; i++) {
      var user = this.registeredUsers[i];
      if (user.getEmail() === mail) {
        return user;
      }
    }
    return null;
  },
  // function implemented to retrieve logged in user saved in local storage
  getLoggedInUser: function() {
    var storedMail = localStorage.getItem("loggedInUser");
    return this.returnUserIfExists(storedMail);
  },
  // removes user from localStorage
  signOutUser: function() {
    loggedInUser = this.getLoggedInUser();
    if (loggedInUser !== null && loggedInUser !== "") {
      loggedInUser.logout();
      return 1;
    }
    return 0;
  },
  registerUsers: function(json) {
    json.map(function(value) {
      this.registeredUsers.push(ModelFactory.create('user', value));
    }, AccountService);
  }
};
