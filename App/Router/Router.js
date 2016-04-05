import { PlaylistPageView } from '../View/PlaylistPageView.js'
import { LoginPageView } from '../View/LoginPageView.js'
import { SignUpPageView } from '../View/SignUpPageView.js'
const AppRouter = Backbone.Router.extend({
  playListCollection: '',
  currentUser: '',
  routes: {
    playlists: 'showPlaylistPage',
    login: 'showLoginPage',
    signup: 'showSignUpPage'
  },
  setCurrentUser(user) {
    this.currentUser = user;
  },
  setPlaylistCollection(playlistCollection) {
    this.playListCollection = playlistCollection;
  },
  getPlaylistCollection() {
    return this.playListCollection;
  },
	showPlaylistPage: function() {
    const playlistPageView = new PlaylistPageView({
      el: document.getElementsByTagName('body')[0],
    });
    playlistPageView.render();
	},
  showLoginPage: function() {
    const loginPageView = new LoginPageView({
      el: document.getElementsByTagName('body')[0],
    });
    loginPageView.render();
  },
  showSignUpPage:function(){
    const signUpPageView = new SignUpPageView({
      el: document.getElementsByTagName('body')[0],
    });
    signUpPageView.render();
  },
});
export { AppRouter };
