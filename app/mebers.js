function Members(data){

     this.userName = data.userName;
     this.email = data.email;
     this.password = data.password;


}

Members.prototype.getUser = function(){
                                        return this.userName;
                            }
Members.prototype.getEmail = function(){
                                        return this.email;
                            }
Members.prototype.getPassword = function(){
                                        return this.password;
                                }

Members.prototype.setUser = function(user){
                                      this.userName=user;
                            }
