import  { UserModel } from './UserModel.js';

const LoginView = Backbone.View.extend({
  className: 'login-template',
  template() {
    const templateText = document.querySelector(`script#${this.className}`).innerText;
    const compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  events: {
    'submit #formSubmit': '_Login',
  },
  _Login(event) {
    const account = {
      username: document.getElementById('email_signIn').value,
      password: document.getElementById('password_signIn').value,
    };
    const self = this;
    $.ajax( {
      url: 'http://localhost:3000/auth',
      type: 'POST',
      data: JSON.stringify(account),
      contentType: 'application/json',
    }).done(function(result){
      document.getElementById('message').innerHTML = 'You are logged in';
      self._createModelByToken(result);
    })
    .fail(function() {
      document.getElementById('message').innerHTML = 'The user does not exist, Join Now !';
    });
    event.preventDefault();
  },
  _createModelByToken(token) {
    $.ajax( {
      url: 'http://localhost:3000/preferences',
      headers: {
        'X-Token': token,
      },
    }).done(function(result){

    });
  },
  render() {
    this.$el.html(this.template());
  },
});


export { LoginView };
