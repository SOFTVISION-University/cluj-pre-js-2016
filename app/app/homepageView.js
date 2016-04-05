import { BaseView } from './baseView.js';
import { SongsListView } from '../song/SongsListView.js';
import { PlaylistsListView } from '../playlist/playlistsListView.js';

const HomepageView = BaseView.extend({

  initialize: function initialize(options) {
    // this.songsList = new SongsListView({
    //   collection: options.songsList,
    // });
    this.playlistsList = new PlaylistsListView({
      collection: options.playlistsList,
    });
  },
  render: function render() {
    this.playlistsList.render();
    this.$el.append(this.playlistsList.el);
    // this.songsList.render();
    // this.$el.append(this.songsList.el);
  },
});

export { HomepageView };
