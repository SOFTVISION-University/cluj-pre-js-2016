import Utils from '../utils.js';

const UserModel = Backbone.Model.extend({
  defaults: {
    username: '',
    password: '',
  },
  initialize() {
    Backbone.on('signOutEvent', this.logout, this);
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
  logout() {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/logout',
      headers: {
        'x-token': window.LoggedInUser.token,
      },
    }).done(() => {
      window.LoggedInUser.fullname = '';
      window.LoggedInUser.token = '';
      Utils.setHeaderBackground('../core/assets/banner-top.jpg');
      Backbone.trigger('statusChanged');
    });
  },
});

export { UserModel };
