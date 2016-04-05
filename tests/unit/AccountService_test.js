describe('test AccountService Class',function() {
  //var songObject = {"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82};
  var accountService;
  accountService = new AccountService();
  // beforeEach(function(){
  //
  // });

  it('test accountservice get usersArray', function() {
    expect(accountService.usersArray).toEqual([]);
  });
  it('test accountservice set usersname', function() {
    accountService.setUsername("u");
    expect(accountService.username).toEqual("u");
  });
  it('test accountservice set password', function() {
    accountService.setPassword("password new");
    expect(accountService.password).toEqual("password new");
  });
  it('test accountservice add user', function() {
    accountService.addUser({name:"user name"});
    expect(accountService.usersArray).toEqual([{name:"user name"}]);
  });

  it('test check login', function() {
    accountService.setUsername("u");
    accountService.setPassword("password new");
    accountService.addUser({name:"user name"});
    expect(accountService.checkLogin()).toEqual(2);
  });

  it('test check login', function() {
    accountService.setUsername("u");
    accountService.setPassword("p");
    accountService.addUser({name:"u",password:"p"});
    expect(accountService.checkLogin()).toEqual(0);
  });


});
