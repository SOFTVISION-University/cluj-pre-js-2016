// import { checkLogin } from './account-service.js' ;

function checkUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const loginResult = accountService.checkLogin(email, password);

  switch (loginResult) {
    case '1':alert('Logged in !');
      return true;
      break;
    case '0':alert('You are not a registered user . Need to sign up first !');
      return false;
      break;
    default :break;
  }
}
