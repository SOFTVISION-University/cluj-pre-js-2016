export const LoginStatusView = Backbone.View.extend({
  loggedInTemplate: _.template($('#template-loggedIn-View').html()),
  loggedOutTemplate: $('#template-loggedOut-View').html(),

  initialize() {
    Backbone.on('statusChanged', this.rerender, this);
  },
  events: {
    'click #signOutButton': 'triggerSignOutEvent',
    'click #signInButton': 'showSignIn',
  },
  showSignIn(event) {
    window.location.href = '#login';
    event.preventDefault();
  },
  triggerSignOutEvent(event) {
    Backbone.trigger('signOutEvent');
    window.location.href = '#login';
    event.preventDefault();
  },
  rerender() {
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
