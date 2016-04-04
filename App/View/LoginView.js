import { CurrentUser } from '../Model/CurrentUser.js'
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
    const user = {};
    user.username = document.getElementById('username').value;
    user.password  =document.getElementById('password').value;
    $.ajax({
      url: 'http://localhost:3000/auth',
      type: 'POST',
      data: JSON.stringify(user),
      dataType: 'json',
      contentType: 'application/json',
    }).done(function(token){
      $.ajax({
        url: 'http://localhost:3000/preferences',
        headers: {
          'x-token': token,
        },
      }).done(function(data) {
        console.log(data);
        const userPreferences = JSON.parse(data);
        CurrentUser.getInstance().setUserHeaderImage(userPreferences.gsx$background.$t);
        CurrentUser.getInstance().setFullName(userPreferences.gsx$fullname.$t);
        debugger;
        const headerDiv = document.getElementsByClassName('headerDiv')[0];
        headerDiv.style.backgroundImage = `url( ${CurrentUser.getInstance().getUserHeaderImage()} )`;
        document.getElementById('full-name').innerText = CurrentUser.getInstance().getFullName();
        document.getElementById('signInButton').style.visibility = 'hidden';
        debugger;
      });
    });
  },
});

export { LoginView };
