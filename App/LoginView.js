function LoginView() {

}

LoginView.prototype.showInvalidUsername = function () {
  document.getElementById('username').className = 'invalidUsername';
};

LoginView.prototype.showInvalidPasswod = function () {
  document.getElementById('password').className = 'invalidPassword';
};

LoginView.prototype.showLoginSucces = function () {
  document.getElementById('username').className = 'loginSucces';
  document.getElementById('password').className = 'loginSucces';
};
