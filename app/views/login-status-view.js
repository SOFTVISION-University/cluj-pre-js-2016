import Utils from '../utils.js';

export const LoginStatusView = Backbone.View.extend({
  loggedInTemplate: _.template($('#template-loggedIn-View').html()),
  loggedOutTemplate: $('#template-loggedOut-View').html(),

  initialize() {
    Backbone.on('statusChanged', this.rerender, this);
  },
  events: {
    'click #signOutButton': 'logout',
  },
  that: this,
  rerender() {
    console.log('triggered');
    this.render();
  },
  f() {
    console.log('LOGOUT');
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
  render() {
    if (window.LoggedInUser.token !== '') {
      this.$el.html(this.loggedInTemplate(window.LoggedInUser));
    } else {
      this.$el.html(this.loggedOutTemplate);
    }
    return this;
  },

});
