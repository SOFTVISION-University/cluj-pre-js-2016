
function User(name,email,password) {
     this.name = name,
     this.email = email,
     this.password = password,
     this.logged = false
}

User.prototype.setLoginState = function (state) {

if(typeof(state) === "boolean")
  this.logged = state;
else
  this.logged = false;
 //need to add observer here;
};

User.prototype.getLoginState = function () {
  return this.logged;
};
