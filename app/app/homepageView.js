import { BaseView } from './baseView.js';
import { SongsListView } from '../playlist/SongsListView.js';
import { PlaylistsListView } from '../playlist/playlistsListView.js';

const HomepageView = BaseView.extend({
  initialize: function initialize(options) {
    this.songsList = new SongsListView({
      collection: options.songsList,
    });
    this.playlistsList = new PlaylistsListView({
      collection: options.playlistsList,
    });
  },
  render: function render() {
    // this.songsList.render();
    // this.$el.append(this.songsList.el);
    this.playlistsList.render();
    this.$el.append(this.playlistsList.el);
  },
});

export { HomepageView };
