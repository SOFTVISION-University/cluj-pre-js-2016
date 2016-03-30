describe('test users', function() {
          var userJSON = {"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"};
          var userTest=new User(userJSON);
          it('test username', function() {
              expect(userTest.userName).toEqual('combs');
          });
          it('test email', function() {
              expect(userTest.email).toEqual('kathycombs@quailcom.com');
          });
          it('test password', function() {
              expect(userTest.password).toEqual('orkman5951');
          });
          it('test setUserName', function(){
              userTest.setUserName("user1");
              expect(userTest.userName).toEqual('user1');
          });
          it('test getUserName', function(){
              expect(userTest.getUserName()).toEqual('user1');
          });
          it('test setEmail', function(){
              userTest.setEmail('a@sd.com');
              expect(userTest.email).toEqual('a@sd.com');
          });
          it('test getEmail', function(){
              expect(userTest.getEmail()).toEqual('a@sd.com');
          });
          it('test setPassword', function(){
              userTest.setPassword('parola');
              expect(userTest.password).toEqual('parola');
          });
          it('test getPassword', function(){
              expect(userTest.getPassword()).toEqual('parola');
          });
  });
