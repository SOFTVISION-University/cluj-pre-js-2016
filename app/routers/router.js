import { HomePageView } from '../app_views/home-page-view.js';
import { SignUpPageView } from '../app_views/sign-up-page-view.js';
import { UserModel } from '../models/user-model.js';
import { UserView } from '../views/user-view.js';
const AppRouter = Backbone.Router.extend({
  routes: {
    '': 'renderIndex',
    logged: 'renderIndex',
    login: 'renderLogin',
    signup: 'renderSignUp',
  },
  renderIndex() {
    const homePageView = new HomePageView({ el: $('#page') });
    this.render(homePageView);
  },
  renderLogin() {
    const userModel = new UserModel({});
    const userView = new UserView({
      el: document.getElementById('auth'),
      model: userModel,
    });
    this.render(userView);
  },
  renderSignUp() {
    const signUpPageView = new SignUpPageView({ el: $('#sign-up-page') });
    this.render(signUpPageView);
  },
  render(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    view.render();
    this.currentView = view;
    return this;
  },
});

export { AppRouter };
