import { PageViewPlaylists } from './views/page-view-playlists';
import { LoginView } from './views/login-view';

export const AppRouter = Backbone.Router.extend({
  routes: {
    '': 'showLogin',
    playlists: 'showPlaylists',
    login: 'showLogin',
  },

  currentView: null,

  removePreviousView() {
    if (this.currentView !== null) {
      this.currentView.remove();
    } else {
      console.log('view not null');
    }
  },

  showLogin() {
    this.removePreviousView();
    const element = document.createElement('div');
    $('#loginDiv')[0].appendChild(element);
    const logInView = new LoginView({
      model: this.currentUser,
      el: element,
    });
    this.currentView = logInView.render();
  },

  showPlaylists() {
    this.removePreviousView();
    if (this.playlists === null) {
      throw new Error('AppRouter', 'playlists needs to be set on router');
    }
    this.playlists.safeFetch().then(() => {
      const element = document.createElement('div');
      $('#playlistsPageContainer')[0].appendChild(element);
      const playlistsPage = new PageViewPlaylists({
        collection: this.playlists,
        el: element,
      });
      this.currentView = playlistsPage.render();
    });
  },

  setCurrentUser(user) {
    this.currentUser = user;
  },

  setPlaylists(playlists) {
    this.playlists = playlists;
  },
});
