import { User } from './OOP/user.js';
function AccountService(usersList) {
  this._users = [];
  const userObj = new User(usersList);
  // replace for with map
  this._users = usersList.map(() => {
    return userObj;
  });
}

AccountService.prototype.getUsers = function getUsers() {
  return this._users;
};

AccountService.prototype.displayLoginError = function displayLoginError() {
  document.getElementById('error').innerHTML = 'Oops! That email/password' +
  'combination is not valid.';
  document.getElementById('email').className = 'login-error';
  document.getElementById('password').className = 'login-error';
};

AccountService.prototype.login = function login() {
  alert('You have successfully logged in!');
};

AccountService.prototype.logout = function logout() {
  alert('You have successfully logged out!');
};
