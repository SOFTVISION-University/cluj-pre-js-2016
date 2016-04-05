
import { LogInView } from './logIn/logInView.js';
import { RegistrationPageView } from './registrationPage/registrationView.js';
import { PlaylistPageView } from './playlistPage/playlistPageView.js';

export const Router = Backbone.Router.extend({
  currentUser: '',
  playlists: '',
  playlistsCollection: '',
  setCurrentUser(model) {
    this.currentUser = model;
  },
  setPlaylists(playlists) {
    this.playlists = playlists;
  },

  routes: {
    index: 'handlePlaylistPage',
    login: 'handleLogInPage',
    registration: 'handleRegistrationPage',
  },
  handlePlaylistPage() {
    const that = this;
    this.playlists.safeFetch().done(function () {
      const playlistPageView = new PlaylistPageView({
        model: that.currentUser,
        collection: that.playlists,
        el: document.getElementsByTagName('body')[0],
      });
      playlistPageView.render();
    });
  },
  handleLogInPage() {
    const logView = new LogInView({
      model: this.currentUser,
      el: document.getElementsByTagName('body')[0],
    });
    logView.render();
  },
  handleRegistrationPage() {
    const registrationPageView = new RegistrationPageView({
      el: document.getElementsByTagName('body')[0],
    });
    registrationPageView.render();
  },
});
