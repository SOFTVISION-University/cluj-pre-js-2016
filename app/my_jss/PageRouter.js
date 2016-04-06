import { LoginView } from './LoginFunctionality/LoginView.js';
import { SignUpView } from './LoginFunctionality/SignUpView.js';
import { FirstPageView } from './FirstPageView';

const PageRouter = Backbone.Router.extend({
  initialize(){
  },
  routes: {
    playlists: 'showPlaylists',
    login: 'loginPage',
    signup: 'signupPage',
    '': 'showPlaylists',
  },
  defaultState() {
    console.log("APEL");
  },
  showPlaylists() {

    this.playlistsCollection.safeFetch()
    .done(() => {
      const firstPageView = new FirstPageView({
        el: document.getElementsByTagName('body'),
        collection: this.playlistsCollection,
      });
      debugger;
      firstPageView.render();
    });
  },
  setUser(user) {
    this.user = user;
  },
  setPlaylists(playlistsCollection) {
    this.playlistsCollection = playlistsCollection;
  },
  loginPage() {
    const loginView = new LoginView({
      el: document.getElementsByTagName('body'),
    });
    loginView.render();
  },
  signupPage() {
    const signUpView = new SignUpView({
      el: document.getElementsByTagName('body'),
    });
    signUpView.render();
  },
});

export { PageRouter };
