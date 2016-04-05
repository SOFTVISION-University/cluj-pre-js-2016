import { CurrentUser } from '../Model/CurrentUser.js'
const LoginStatusView = Backbone.View.extend({
  initialize: function() {
     this.listenTo(Backbone, 'changeUserStatus', this.render);
  },
  events: {
    'click #log-out-button': 'logOut',
    'click #log-in-button': 'goToLogIn',
  },
  viewTemplate: '',
  fullName: '',
  template(values) {
    const templateText = document.querySelector(`#${this.viewTemplate}`).innerText;
    const compiled = _.template(templateText);
    if (values !== null) {
      return compiled(values);
    }
    return compiled();
  },
  logOut() {
    this.model.logOut();
  },
  goToLogIn() {
    Backbone.trigger('deletePlaylistPage');
    window.app.navigate('login', true);
  },
  render() {
    this.el.innerHTML = '';
    if (CurrentUser.getInstance().getIsLogged()) {
      this.fullName = CurrentUser.getInstance().getFullName();
      this.viewTemplate = 'logout-template';
      const headerDiv = document.getElementsByClassName('headerDiv')[0];
      headerDiv.style.backgroundImage = `url( ${CurrentUser.getInstance().getUserHeaderImage()} )`;
    }
    else {
      this.viewTemplate = 'login-template';
      const headerDiv = document.getElementsByClassName('headerDiv')[0];
      headerDiv.style.backgroundImage = 'url(../core/assets/banner-app.jpg)';
    }
    this.$el.append(this.template(this));
    return this;
  },
});

export { LoginStatusView };
