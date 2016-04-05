const LoginView = Backbone.View.extend({
  template(values) {
    const templateText = document.querySelector('#login-user').innerText;
    const compiled = _.template(templateText);
    if (values !== null) {
      return compiled(values);
    }
    return compiled();
  },
  events: {
    'click #login-button': 'logIn',
  },
  render() {
    this.$el.append(this.template(this.model));
    return this;
  },
  logIn() {
    this.model.logIn();
  }
});

export { LoginView };
