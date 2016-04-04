const users = JSON.parse(usersJSON);

function AccountService() {
}

AccountService.prototype.checkLogin = function checkLogin(email, password) {
  let check = '0';
  for (let i = 0; i < users.length; i ++) {
    if (email === users[i].email && password === users[i].password) {
      localStorage.setItem('userData', JSON.stringify(users[i].email));
      check = '1';
      break;
    }
  }
  return check;
};

const accountService = new AccountService();
