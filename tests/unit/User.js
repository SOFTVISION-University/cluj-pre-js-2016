describe('User tests', function(){

  var userObj;

  beforeEach(function(){
      userObj = new User("John","johndoe@gmail.com","johndoe12");
    });

  it('getLoginState should return true setted with setLoginState',function (){
    userObj.setLoginState(true);
    expect(userObj.getLoginState()).toEqual(true);
  });
  it('getLoginState should return false setted with setLoginState',function (){
    userObj.setLoginState(false);
  expect(userObj.getLoginState()).toEqual(false);
  });

  it('getLoginState should return false setted with setLoginState',function (){
    userObj.setLoginState({});
  expect(userObj.getLoginState()).toEqual(false);
  });

  it('getLoginState will retrive true state if value is setted true', function(){
    userObj.logged = true;
    expect(userObj.getLoginState()).toEqual(true);
  });
  //
  it('getLoginState will retrive false state if value is setted false', function(){
      userObj.logged = false;
    expect(userObj.getLoginState()).toEqual(false);
  });
});
