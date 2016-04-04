import { user } from '../User/userObj.js';
export const LogInView = Backbone.View.extend({
  events: {
    'click #SignIn_button ': 'logIn',
  },
  renderTemplate(selectorString, options) {
    const templateText = document.querySelector(selectorString).innerText;
    const compiled = _.template(templateText);
    if (options !== null) {
      return compiled(options);
    }
    return compiled();
  },
  template(val) {
    return this.renderTemplate('#template-logIn', val);
  },
  render() {
    this.$el.html(this.template());
    return this;
  },

  logIn() {
    const that = this;
    const data = {
      username: document.getElementById('e-mail').value,
      password: document.getElementById('pass').value,
    };
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/auth',
      data: JSON.stringify(data),
      dataType: 'json',
      contentType: 'application/json',
    }).done(function (token) {
      user.token = token;
      user.username = data.username;
      user.status = true;
      that.getPreferenced();
    });
  },
  getPreferenced() {
    const that = this;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/preferences',
      headers: {
        'x-token': user.token,
      },
    }).done(function (data) {
      const dataPars = JSON.parse(data);
      user.backgroundColor = dataPars.gsx$background.$t;
      user.fullName = dataPars.gsx$fullname.$t;
      that.model.set(user);
      that.model.triggerEventOnHeader();
    });
  },

});
