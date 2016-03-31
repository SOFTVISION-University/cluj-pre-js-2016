import { AccountService } from './AccountService.js';
import { User } from './User.js';

const LOGIN_SUCCESFULLY = 0;
const INVALID_PASSWORD = 1;
const INVALID_USERNAME = 2;
// const usernameJson = JSON.parse(usersJSON);

function addUserToAccountService(userFromJS) {
  const user = new User(userFromJS);
  AccountService.getInstance().addUser(user);
}

document.addEventListener('DOMContentLoaded', () => {
  // usernameJson.forEach(addUserToAccountService);
});

function logOutUser() {
  localStorage.setItem('nameUser1', null);
  window.location.href = 'index.html';
}

function validate() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  AccountService.getInstance().setUsername(username);
  AccountService.getInstance().setPassword(password);
  const loginView = new LoginView();

  switch (AccountService.getInstance().checkLogin()) {
    case LOGIN_SUCCESFULLY:

      loginView.showLoginSucces();
      window.location.href = 'index.html';
      break;
    case INVALID_PASSWORD:
      loginView.showInvalidPasswod();
      break;
    case INVALID_USERNAME:
      loginView.showInvalidUsername();
      break;
    default:

  }
}
function focusOut(id) {
  id.className = 'focusOut';

}
function focusIt(id) {
  id.className = 'focusIn';
}
export { LOGIN_SUCCESFULLY, INVALID_USERNAME };
