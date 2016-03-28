describe('AccountService SignIn Tests', function(){
  it('test good credentials', function(){
    var userTest = new User("Calin","calinortan@gmail.com","parolatest");
    spyOn(AccountService, 'returnUserIfExists').and.returnValue(userTest);
    expect(AccountService.signIn("calinortan@gmail.com","parolatest")).toEqual(true);

  });

  it('test  wrongPassword', function(){
    var userTest = new User("Calin","calinortan@gmail.com","parolatest");
    spyOn(AccountService, 'returnUserIfExists').and.returnValue(userTest);
    expect(AccountService.signIn("calinortan@gmail.com","parolatestWrongPass")).toEqual(false);
    expect(AccountService.returnUserIfExists).toHaveBeenCalled();
  });

  it('test  wrongUser', function(){
    spyOn(AccountService, 'returnUserIfExists').and.returnValue(null);
    expect(AccountService.signIn("calinortan@gmail.com","parolatestWrongPass")).toEqual(false);
    expect(AccountService.returnUserIfExists).toHaveBeenCalled();
  });
});

describe('AccountService returnUserIfExists Tests', function(){

  it('test existing user', function(){
    expect(AccountService.returnUserIfExists("calinortan@gmail.com")).toEqual(jasmine.any(User));
  });

  it('test non-existing user', function(){
    expect(AccountService.returnUserIfExists("calinor@gmail.com")).toBeNull();
  });
});

describe('AccountService getLoggedInUser', function(){
  var userTest = new User("Calin","calinortan@gmail.com","parolatest");
  it('existing user in localStorage', function(){
    spyOn(localStorage, 'getItem').and.returnValue(userTest.getEmail());
    expect(AccountService.getLoggedInUser()).toEqual(jasmine.any(User));
  });

  it('no logged in user', function(){
    spyOn(localStorage, 'getItem').and.returnValue(null || "");
    expect(AccountService.getLoggedInUser()).toBeNull();
  });
});

describe('AccountService signOutUser', function(){
  var userTest = new User("Calin","calinortan@gmail.com","parolatest");
  it('existing user in localStorage', function(){
    spyOn(AccountService, 'getLoggedInUser').and.returnValue(userTest);
    expect(AccountService.signOutUser()).toEqual(1);
  });

  it('null user in localStorage', function(){
    spyOn(AccountService, 'getLoggedInUser').and.returnValue(null);
    expect(AccountService.signOutUser()).toEqual(0);
  });

  it('empty user in localStorage', function(){
    spyOn(AccountService, 'getLoggedInUser').and.returnValue("");
    expect(AccountService.signOutUser()).toEqual(0);
  });

});

/*

*/
