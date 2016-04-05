function CurrentUser() {
  this.userHeaderImage = '../core/assets/banner-app.jpg';
  this.fullName = '';
  this.isLogged = false;
  this.token = '';
}
CurrentUser._instance = null;
CurrentUser.getInstance = function () {
  if (CurrentUser._instance === null) {
    CurrentUser._instance = new CurrentUser();
  }
  return CurrentUser._instance;
};

CurrentUser.prototype.reset = function() {
  this.userHeaderImage = '../core/assets/banner-app.jpg';
  this.fullName = '';
  this.isLogged = false;
  this.token = '';
}

CurrentUser.prototype.setUserHeaderImage = function(headerImg) {
  this.userHeaderImage = headerImg;
};
CurrentUser.prototype.setFullName = function(fullname) {
  this.fullName = fullname;
};
CurrentUser.prototype.setIsLogged = function(isLogged) {
  this.isLogged = isLogged;
};
CurrentUser.prototype.setToken = function(token) {
  this.token = token;
};

CurrentUser.prototype.getUserHeaderImage = function() {
  return this.userHeaderImage;
};
CurrentUser.prototype.getFullName = function() {
  return this.fullName;
};
CurrentUser.prototype.getIsLogged = function() {
  return this.isLogged;
};
CurrentUser.prototype.getToken = function() {
  return this.token;
};


export { CurrentUser };
