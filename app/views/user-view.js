const UserView = Backbone.View.extend({
  events: {
    'focus #email': 'getFocus',
    'focus #password': 'getFocus',
    'blur #email': 'getBlur',
    'blur #password': 'getBlur',
    'submit #sign_in': 'logIn',
  },
  getFocus(ev) {
    this.$(ev.currentTarget).attr('class', 'focus');
  },
  getBlur(ev) {
    this.$(ev.currentTarget).attr('class', 'blur');
  },
  loginError() {
    document.getElementById('error').innerHTML = `Oops! That email/password
    combination is not valid.`;
    document.getElementById('email').attr('class', 'login-error');
    document.getElementById('password').attr('class', 'login-error');
  },
  renderTemplate(selectorString, options) {
    const templateText = document.querySelector(selectorString).innerText;
    const compiled = _.template(templateText);
    if (options !== null) {
      return compiled(options);
    }
    return compiled();
  },
  template() {
    return this.renderTemplate('#template-UserView');
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  logIn() {
    const user = {};
    user.email = $('#email').val();
    user.password = $('#password').val();
    const request = $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/auth',
      data: JSON.stringify(user),
      dataType: 'json',
    });
    request.done((token) => {
      $.ajax({
        url: 'http://localhost:3000/preferences',
        headers: { 'x-token': token },
      }).done((preferences) => {
        document.getElementById('index-header').style.backgroundImage = preferences.background;
      }).fail(() => {
      });
    });
    request.fail(() => {
      this.loginError();
      return false;
    });
  },
  logOut() {
    this.isLoggedIn = false;
  },
});

export { UserView };
