import { LoginStatusView } from './LoginStatusView.js';
import { UserModel } from '../Model/UserModel.js';
import { CurrentUser } from '../Model/CurrentUser.js';
const HeaderView = Backbone.View.extend({
  events: {
      'click #joinButton': 'goToSignUp',
  },
  template(values) {
    const templateText = document.querySelector('#header-template').innerText;
    const compiled = _.template(templateText);
    if (values !== null) {
      return compiled(values);
    }
    return compiled();
  },
  goToSignUp() {
    console.log("click");
    Backbone.trigger('deletePlaylistPage');
    window.app.navigate('signup', true);
  },
  render() {
    this.$el.append(this.template(this));
    const headerDiv = document.getElementsByClassName('headerDiv')[0];
    headerDiv.style.backgroundImage = `url( ${CurrentUser.getInstance().getUserHeaderImage()} )`;
    const loginStatusView = new LoginStatusView({
      model: new UserModel(),
      el: document.getElementById('login-button-div'),
    });
    loginStatusView.render();
    this.model.addToNestedView(loginStatusView);
    return this;
  },
});

export { HeaderView };
