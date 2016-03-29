describe('AccountService tests', function(){
    var accountServiceTest;
  describe('--> SignUp tests', function(){


    beforeEach(function(){
      accountServiceTest = new AccountService();
      });

    it('--> SignUp should return false when a valid account is passed', function(){
      expect(accountServiceTest.signUp("ion","iotiriac@gmail.com","alabala")).toEqual(false);
    });


    it('--> SignUp should return true when email account allready exits', function(){
      expect(accountServiceTest.signUp("combs","kathycombs@quailcom.com","alabala")).toEqual(true);
    });
  });

  describe('--> signIn tests', function(){

    it('--> signIn should return false if user account email and password does not exits', function(){
      expect(accountServiceTest.signIn("iotiriac@gmail.com","alabala")).toEqual(false);
    });


    it('--> signIn should return true if user account email and password does exits', function(){
      expect(accountServiceTest.signIn("kathycombs@quailcom.com","orkman5951")).toEqual(true);
    });
  });


});
