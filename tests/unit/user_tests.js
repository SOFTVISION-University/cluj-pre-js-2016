describe('user tests', function() {
    var usersObj = {"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"};
    var user;
    beforeEach(function() {
      user = new User(usersObj);
    });
    it('test getUserName', function() {
        expect(user.getUserName()).toEqual('combs');
    });
    it('test getEmail', function() {
        expect(user.getEmail()).toEqual('kathycombs@quailcom.com');
    });
    it('test getPassword', function() {
        expect(user.getPassword()).toEqual('orkman5951');
    });
    it('test setUserName', function() {
        user.setUserName('newUserName');
        expect(user.getUserName()).toEqual('newUserName');
    });
    it('test setEmail', function() {
        user.setEmail('newEmail');
        expect(user.getEmail()).toEqual('newEmail');
    });
    it('test setPassword', function() {
      user.setPassword('newPassword');
        expect(user.getPassword()).toEqual('newPassword');
    });
});
