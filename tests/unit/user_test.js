describe('test User Class',function() {
  var userObject;
  var user;
  userObject = {"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"};
  beforeEach(function(){
    user = new User(userObject);
  });


  it('test user get email', function() {
    expect(user.logged).toEqual(false);
  });

  it('test user get name', function() {
    expect(user.getUserName()).toEqual('combs');
  });
});
