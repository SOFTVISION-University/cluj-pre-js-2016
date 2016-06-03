const UserView = Backbone.View.extend({
  events: {
    'click #sign_in': 'signIn',
  },
  loginError() {
    document.getElementById('error').innerHTML = `Oops! That email/password
    combination is not valid.`;
    this.el.querySelector('.email').className = 'login-error';
    this.el.querySelector('.password').className = 'login-error';
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
  signIn(e) {
    const that = this;
    const username = this.el.querySelector('.email').value;
    const password = this.el.querySelector('.password').value;
    const isLoggedIn = false;
    this.model.set({ username, password, isLoggedIn });
    this.model.logIn().done((token) => {
      location.hash = 'logged';
      that.model.getPreferences(token).done(() => {
        if (that.model.get('isLoggedIn') === true) {
          document.getElementById('index-header').style.backgroundImage =
          `url('${that.model.get('background')}')`;
        }
      });
    }).fail(() => {
      return that.loginError();
    });
    e.preventDefault();
  },
});

export { UserView };
