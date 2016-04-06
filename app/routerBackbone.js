
import { LogInView } from './logIn/logInView.js';
import { RegistrationPageView } from './registrationPage/registrationView.js';
import { PlaylistPageView } from './playlistPage/playlistPageView.js';

export const Router = Backbone.Router.extend({

  setCurrentUser(model) {
    this.currentUser = model;
  },
  setPlaylists(playlists) {
    this.playlists = playlists;
  },

  routes: {
    '': 'handlePlaylistPage',
    index: 'handlePlaylistPage',
    login: 'handleLogInPage',
    registration: 'handleRegistrationPage',
  },
  handlePlaylistPage() {
    const that = this;
    this.playlists.safeFetch().then(function () {
      const playlistPageView = new PlaylistPageView({
        model: that.currentUser,
        collection: that.playlists,
        el: document.querySelector('body'),
      });
      playlistPageView.render();
    });
  },
  handleLogInPage() {
    const logView = new LogInView({
      model: this.currentUser,
      el: document.querySelector('body'),
    });
    logView.render();
  },
  handleRegistrationPage() {
    const registrationPageView = new RegistrationPageView({
      el: document.querySelector('body'),
    });
    registrationPageView.render();
  },
});
