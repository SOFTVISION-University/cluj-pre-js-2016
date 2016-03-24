function User(yourName,email,password,userStatus){
  this.yourName=yourName;
  this.email=email;
  this.password=password;
  this.userStatus=userStatus;
}

User.prototype={
  getYourName:function(){
    return this.yourName;
  },

  setYourName:function(yourName){
    this.yourName=yourName;
  },


  getEmail:function(){
    return this.email;
  },

  setEmail:function(email){
    this.email=email;
  },

  getPassword:function(){
    return this.password;
  },

  setPassword:function(password){
    this.password=password;
  },

  getUserStatus:function(){
    return this.userStatus;
  },

  setUserStatus:function(userStatus){
    this.userStatus=userStatus;
  },


};
