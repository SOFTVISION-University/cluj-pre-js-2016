import { PageViewPlaylists } from './views/page-view-playlists';

export const AppRouter = Backbone.Router.extend({
  routes: {
    playlists: 'showPlaylists',
    login: 'showLogin',
  },

  currentView: null,

  removePreviousView() {
    if (this.currentView !== null) {
      this.currentView.remove();
      alert('VIEW REMOVED');
    } else {
      console.log('view not null');
    }
  },

  showPlaylists() {
    this.removePreviousView();
    if (this.playlists === null) {
      throw new Error('AppRouter', 'playlists needs to be set on router');
    }
    this.playlists.safeFetch().done(() => {
      const playlistsPage = new PageViewPlaylists({
        collection: this.playlists,
        el: $('#playlistsPageContainer')[0],
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
