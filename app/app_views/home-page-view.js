import { HeaderView } from '../app_views/header-view.js';
import { ContentView } from '../app_views/content-view.js';
import { FooterView } from '../app_views/footer-view.js';
import { PlaylistCollection } from '../collections/playlist-collection.js';
import { PlaylistsView } from '../views/playlists-view.js';
const HomePageView = Backbone.View.extend({
  render() {
    const template = _.template($('#template-PageView').html(), {});
    this.$el.html(template);
    const headerView = new HeaderView({ el: $('#index-header') });
    headerView.render();
    const contentView = new ContentView({ el: $('#index-content') });
    contentView.render();
    const playlists = new PlaylistCollection();
    playlists.fetch().done(() => {
      const playlistsView = new PlaylistsView({
        el: document.getElementById('index-card-area'),
        collection: playlists,
      });
      playlistsView.render();
    });
    const footerView = new FooterView({ el: $('#footer') });
    footerView.render();
  },
});

export { HomePageView };
