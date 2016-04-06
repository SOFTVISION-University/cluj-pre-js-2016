import { HomePageView } from '../app_views/home-page-view.js';
import { UserModel } from '../models/user-model.js';
import { UserView } from '../views/user-view.js';
const AppRouter = Backbone.Router.extend({
  routes: {
    '': 'renderIndex',
    logged: 'renderIndex',
    login: 'renderLogin',
    singup: 'renderSignUp',
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
