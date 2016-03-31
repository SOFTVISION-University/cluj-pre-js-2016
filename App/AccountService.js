import { LOGIN_SUCCESFULLY, INVALID_USERNAME } from './LoginValidate.js';

function AccountService() {
  this.username = '';
  this.password = '';
  this.usersArray = [];
  this.loggedUser = JSON.parse(localStorage.getItem('nameUser1'));
}

AccountService._instance = null;

AccountService.getInstance = function () {
  if (AccountService._instance === null) {
    AccountService._instance = new AccountService();
  }
  return AccountService._instance;
};
AccountService.prototype.setUsername = function (username) {
  this.username = username;
};
AccountService.prototype.setPassword = function (password) {
  this.password = password;
};
AccountService.prototype.addUser = function (user) {
  this.usersArray.push(user);
};
AccountService.prototype.checkLogin = function () {
  const username = this.username;
  const password = this.password;
  const foundUser = this.usersArray.filter((user) => {
    if (user.name === username && user.password === password) {
      AccountService.getInstance().loggedUser = user;
      AccountService.getInstance().loggedUser.logged = true;
      return true;
    }
    return false;
  });
  if (foundUser.length > 0) {
    localStorage.setItem('nameUser1', JSON.stringify(AccountService.getInstance().loggedUser));
    return LOGIN_SUCCESFULLY;
  }
  return INVALID_USERNAME;
};
export { AccountService };
