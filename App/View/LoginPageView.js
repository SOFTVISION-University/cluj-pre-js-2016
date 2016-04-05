import { LoginView } from './LoginView.js'
import { UserModel } from '../Model/UserModel.js'
const LoginPageView = Backbone.View.extend({
  initialize() {
    this.listenTo(Backbone, 'deleteLoginPage', this.deleteThis);
  },
  nestedViews: [],
  nestedView(view) {
    this.nestedViews.push(view);
  },
  deleteThis() {
    this.nestedViews.forEach(this.removeView);
  },
  removeView(view) {
    view.remove();
  },
  template(values) {
    const templateText = document.querySelector('#login-page-template').innerText;
    const compiled = _.template(templateText);
    if (values !== null) {
      return compiled(values);
    }
    return compiled();
  },
  render() {
    debugger;
    this.$el.append(this.template(this.model));
    const loginView = new LoginView({
      model: new UserModel(),
      el: document.getElementById('login-div'),
    });
    loginView.render();
    this.nestedView(loginView);
    return this;
  },
});

export { LoginPageView };
