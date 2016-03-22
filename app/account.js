function AccountService(){
  this.persons=[];
  this.accountStatus="";

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

  addUser:function(user){
      this.persons.push(user);
  },


    LogIn:function(){},
    LogOut:function(){},
};
