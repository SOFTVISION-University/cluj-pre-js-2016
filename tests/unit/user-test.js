describe('test Users', function() {

       var user = {
       name : 'John',
       email : 'John@ass',
       pass : 'pass123'
     };
       it('test name', function() {
           expect(user.name).toEqual('John');
       });
       it('test email', function() {
           expect(user.email).toEqual('John@ass');
       });
       it('test password', function() {
           expect(user.pass).toEqual('pass123');
       });

       it ('test change name', function(){
          user.name = 'Num';
          expect(user.name).toEqual('Num');
       });

       it ('test change email', function(){
          user.email = 'Num@mail';
          expect(user.email).toEqual('Num@mail');
       });

       it ('test change pass', function(){
          user.pass = 'Numpass1';
          expect(user.pass).toEqual('Numpass1');
       });
   });
