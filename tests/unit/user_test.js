describe('User Tests', function(){
  var user = new User("yourNameTest","emailTest", "passwordTest", "userStatusTest");

  it('test getYourName', function(){
      expect(user.getYourName()).toEqual("yourNameTest");
  });

  it('test setYourName', function(){
      user.setYourName('newYourName');
      expect(user.getYourName()).toEqual("newYourName");
  });

  it('test getEmail', function(){
      expect(user.getEmail()).toEqual("emailTest");
  });

  it('test setEmail', function(){
      user.setEmail('newEmail');
      expect(user.getEmail()).toEqual("newEmail");
  });

  it('test getPassword', function(){
      expect(user.getPassword()).toEqual("passwordTest");
  });

  it('test setPassword', function(){
      user.setPassword('newPassword');
      expect(user.getPassword()).toEqual("newPassword");
  });

  it('test getUserStatus', function(){
      expect(user.getUserStatus()).toEqual("userStatusTest");
  });

  it('test setUserStatus', function(){
      user.setUserStatus('newUserStatus');
      expect(user.getUserStatus()).toEqual("newUserStatus");
  });

});
