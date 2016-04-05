import Utils from '../utils.js';

const LoginView = Backbone.View.extend({
  inputvalues: {
    username: 'default',
    password: 'default',
  },
  template: $('#template-Login').html(),
  render() {
    this.$el.html(this.template);
    return this;
  },
  events: {
    'click #submitSignIn': 'handleLogin',
  },
  handleLogin(event) {
    this.inputvalues.username = document.forms.signInForm.username.value;
    this.inputvalues.password = document.forms.signInForm.password.value;
    event.preventDefault();
    this.sendLoginPost(this.inputvalues);
  },
  sendLoginPost(data) {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/auth',
      data: JSON.stringify(data),
      dataType: 'json',
      contentType: 'application/json',
    }).done((resp) => {
      window.LoggedInUser.token = resp;
      this.getPreferences();
    });
  },

  getPreferences() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/preferences',
      headers: {
        'x-token': window.LoggedInUser.token,
      },
    }).done((resp) => {
      const jsonObj = JSON.parse(resp);
      window.LoggedInUser.fullname = jsonObj.gsx$fullname.$t;
      Utils.setHeaderBackground(jsonObj.gsx$background.$t);
      Backbone.trigger('statusChanged');
    });
  },
});

export { LoginView };
