function User(obj) {

  this.userName = obj.userName ;
  this.email = obj.email ;
  this.password = obj.password ;

}

User.prototype.getUserName = function () {

  return this.userName ;
};

User.prototype.getEmail = function () {

  return this.email ;
};

User.prototype.getPassword = function () {

  return this.password ;
};

User.prototype.setUserName = function ( userName ) {

  this.userName = userName ;
};

User.prototype.setEmail = function ( email ) {

  this.email = email ;
};


User.prototype.setPassword = function ( password ) {

  this.password = password ;
};
