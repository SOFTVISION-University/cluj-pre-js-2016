import Utils from '../utils.js';

const LoginView = Backbone.View.extend({
  inputvalues: {
    username: '',
    password: '',
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
    this.inputvalues.username = this.el.querySelector('input[name="username"]').value;
    this.inputvalues.password = this.el.querySelector('input[name="password"]').value;
    event.preventDefault();
    window.location.href = '#playlists';
    this.model.sendLoginPost(this.inputvalues);
  },
});

export { LoginView };
