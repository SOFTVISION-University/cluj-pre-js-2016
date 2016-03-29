describe('All users test -->',function(){

      var allUsersTest;

    describe('CheckByType tests',function(){

      beforeEach(function(){
         allUsersTest = new Users();
        });

      it('CheckByType should return true if email verification exists in user list',function(){
        var apel = allUsersTest.checkedByType("email","kathycombs@quailcom.com");

        expect(apel).toEqual(true);
      });

        it('CheckByType should return false if email verification does not exist in user list',function(){
          var apel = allUsersTest.checkedByType("email","kawadawdambs@quailcom.com");
          expect(apel).toBe(false);
        });

        it('CheckByType should return false if password verification does not exist in user list',function(){
          expect(allUsersTest.checkedByType("password","kathycombs@quailcom.com")).toEqual(false);
        });

        it('CheckByType should return true if password verification exists in user list',function(){
          expect(allUsersTest.checkedByType("password","orkman5951")).toEqual(true);
        });
    });

  describe('addNewUser tests',function(){

      it('addNewUser should return  a length + 1 of all users after adding', function(){
        var count = allUsersTest.returnUsers().length;
        allUsersTest.addNewUser("ion","ioncampian@gmail.com","blablabla");
        expect(allUsersTest.returnUsers().length).toEqual(count + 1);
      });
  });

  describe('checkedByEmail tests',function(){
      it('checkedByEmail should return true if email is send correctly to function CheckByType', function(){
      expect(allUsersTest.checkedByEmail("kathycombs@quailcom.com")).toEqual(true);
      });
      it('checkedByEmail should return false if email is send incorect to function CheckByType', function(){
      expect(allUsersTest.checkedByEmail("notexistinarray@quailcom.com")).toEqual(false);
      });
  });
  describe('checkedByPassword tests',function(){
      it('checkedByPassword should return true if password is send correctly to function CheckByType', function(){
        expect(allUsersTest.checkedByPassword("orkman5951")).toEqual(true);
        });
        it('checkedByPassword should return false if password is send incorect to function CheckByType', function(){
          expect(allUsersTest.checkedByPassword("asdwadwad")).toEqual(false);
          });
   });
   describe('setUserState tests',function(){
     it('setUserState should return the state value set ',function(){
       var user = allUsersTest.createUser("Pop","popdoe@gmail.com","popdoe12");
       allUsersTest.addNewUser(user);
       allUsersTest.setUserState("popdoe@gmail.com",true);
        expect(user.getLoginState()).toEqual(true);
     });
   });
});
