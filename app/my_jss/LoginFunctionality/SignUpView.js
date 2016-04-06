const SignUpView = Backbone.View.extend({
  className: 'singup-template',
  template() {
    const templateText = document.querySelector(`script#${this.className}`).innerText;
    const compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  events: {
    'click #SignUpFree': '_movePageTop',
    'submit #form_signUp': '_SignUpUser',
  },
  _movePageTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },
  _SignUpUser() {
    const accountNewUser = {
      email: document.getElementById('sign-up-name').value,
      username: document.getElementById('sign-up-email').value,
      password: document.getElementById('sign-up-password').value,
    };
    const self = this;
    $.ajax( {
      url: 'http://localhost:3000/register',
      type: 'POST',
      data: JSON.stringify(accountNewUser),
      contentType: 'application/json',
    }).done(function(result){
      document.getElementById('textFormMessage').innerHTML = result;
    })
    .fail(function() {
      document.getElementById('textFormMessage').innerHTML = 'Account not created, try new email !';
    });
    event.preventDefault();
  },
  render() {
    this.$el.html(this.template());
  },
});
export { SignUpView };
