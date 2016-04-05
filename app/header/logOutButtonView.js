

export const LogOutButtonView = Backbone.View.extend({
  events: {
    'click #logOut ': 'logOutFunction',
    'click #logIn': 'logInFunction',
  },
  logInFunction() {
    window.location.href = '#login';
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
    if (this.model.get('status')) {
      return this.renderTemplate('#template-logOutButton');
    }
    return this.renderTemplate('#template-logInButton');
  },
  render() {
    this.$el.html(this.template());
    return this;
  },
  logOutFunction() {
    const that = this;

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/logout',
      headers: {
        'x-token': that.model.get('token'),
      },
    }).done(function (data) {
      that.model.set('status', false);
      that.model.triggerEventOnHeader();
    });
  },
});
