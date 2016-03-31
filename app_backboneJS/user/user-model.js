const User = Backbone.Model.extend({
  defaults: {
    userName: 'user1',
    email: 'user1@test.com',
    password: 'test',
    isLoggedIn: false,
  },
  logIn() {
  },
  logOut() {
  },
});
export { User };
