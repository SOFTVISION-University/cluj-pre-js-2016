

describe('test isUserRegistered', function() {

  var me = new AccountService();
  me.members=[{email:'kathycombs@quailcom.com',password : 'orkman5951'}];

    it('test isUserRegistered with a valid mail/password ', function() {


        expect(me.isUserRegistered ('kathycombs@quailcom.com','orkman5951')).toEqual('ok');
     });
     it('test isUserRegistered with a non valid mail/password ', function() {


         expect(me.isUserRegistered ('cosmin','orkman5951')).toEqual('ERROR');
      });
      it('test isUserRegistered with a valid mail and a non valid password ', function() {


          expect(me.isUserRegistered ('kathycombs@quailcom.com','cosmin')).toEqual('ERROR');
       });
       it('test isUserRegistered with a valid password and a non valid email ', function() {


           expect(me.isUserRegistered ('cosmini@gmail.com','orkman5951')).toEqual('ERROR');
        });




  });


describe('test checkEmail', function() {
  var me = new AccountService();
  me.members=[{email:'kathycombs@quailcom.com'}];

  it('test checkEmail with an existing mail', function() {
      expect(me.checkEmail ('kathycombs@quailcom.com')).toEqual('ERROR');
   });
   it('test checkEmail with another email', function() {

      me.members=[{email:'kathycombs@quailcom.com'},{email:'kathycombs@quai2.com'}];
       expect(me.checkEmail ('cosmin')).toEqual('ok');
    });


});


describe('test addUsers', function() {
  var me = new AccountService();
  me.members=[];
  it('test addUsers', function() {
        me.addUsers ({email:'cosmini357@gmail.com'});
      expect(me.members).toEqual([{email:'cosmini357@gmail.com'}]);
   });





});
