function CurrentUser() {
  this.userHeaderImage = '';
  this.fullName = '';
}
CurrentUser._instance = null;
CurrentUser.getInstance = function () {
  if (CurrentUser._instance === null) {
    CurrentUser._instance = new CurrentUser();
  }
  return CurrentUser._instance;
};
CurrentUser.prototype.setUserHeaderImage = function(headerImg) {
  this.userHeaderImage = headerImg;
};
CurrentUser.prototype.setFullName = function(fullname) {
  this.fullName = fullname;
};

CurrentUser.prototype.getUserHeaderImage = function() {
  return this.userHeaderImage;
};
CurrentUser.prototype.getFullName = function() {
  return this.fullName;
};

export { CurrentUser };
