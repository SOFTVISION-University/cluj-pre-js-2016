describe('user tests', function(){
  var userObject = {"userName":"robert","email":"cosma.robert91@yahoo.com","password":"test"} ;
  var user ;
  beforeEach(function() {
    user = new User(userObject);
  });
  it('user getName', function(){
      expect(user.getUserName()).toEqual("robert");
  });
  it('user setName', function(){
      user.setUserName('robert');
      expect(user.getUserName()).toEqual("robert");
  });
  it('user getEmail', function(){
      expect(user.getEmail()).toEqual("cosma.robert91@yahoo.com");
  });
  it('user setEmail', function(){
      user.setEmail('cosma.robert91@yahoo.com');
      expect(user.getEmail()).toEqual("cosma.robert91@yahoo.com");
  });
  it('user getPassword', function(){
      expect(user.getPassword()).toEqual("test");
  });
  it('user setPassword', function(){
      user.setPassword('test');
      expect(user.getPassword()).toEqual("test");
  });
});
