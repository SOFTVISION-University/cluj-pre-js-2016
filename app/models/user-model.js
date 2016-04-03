const UserModel = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/users',
  defaults: {
    userName: 'Marius',
    email: 'marius.luca@test.ro',
    password: 'password',
    isLoggedIn: false,
  },
  logIn() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    if (this.el.email === email && this.el.password === password) {
      this.isLoggedIn = true;
      localStorage.setItem('url', JSON.stringify(url));
    }
  },
  logOut() {
    this.isLoggedIn = false;
    localStorage.removeItem(key);
  },
});

export { UserModel };
