export const RegistrationPageView = Backbone.View.extend({
  events: {
    'click #SignUp-button ': 'signUp',
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
    return this.renderTemplate('#template-registerPage');
  },
  render() {
    this.$el.html(this.template());
    return this;
  },

  signUp() {
    const data = {
      email: document.getElementById('e-mail-reg').value,
      username: document.getElementById('username').value,
      password: document.getElementById('password-reg').value,
    };
    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/register',
      data: JSON.stringify(data),
      dataType: 'json',
      contentType: 'application/json',
    }).error(function (token) {
      console.log(token);
    });
  },
});
