import { user } from './userObj.js';

export const UserModel = Backbone.Model.extend({
  defaults: {
    fullName: '',
    username: '',
    token: '',
    backgroundColor: '',
    status: false,
  },
  triggerEventOnHeader() {
    this.trigger('triggerHead');
  },
  triggerEventOnLogOut() {
    this.trigger('triggerPage');
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
    });
  },

});
