export const LoginStatusView = Backbone.View.extend({
  loggedInTemplate: _.template($('#template-loggedIn-View').html()),
  loggedOutTemplate: $('#template-loggedOut-View').html(),

  initialize() {
    Backbone.on('statusChanged', this.f, this);
  },
  f() {
    console.log('triggered');
    this.render();
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
