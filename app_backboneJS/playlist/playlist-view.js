import { SongsListView } from '../song/song-list-view.js';
import { SongsCollection } from '../song/song-collection.js'

const PlaylistView = Backbone.View.extend({
  tagName: 'div',
  className: 'playlist-view',
  template() {
    const fn = _.template($('script#playlist-item-view').html());
    return fn.apply(this, arguments);
  },
  events: {
    'click #explore-list-button': 'openListOfSongs',
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  openListOfSongs() {
    const songsList = new SongsCollection();

    songsList.fetch().done(() => {
      const songListDisplay = new SongsListView({
        el: '#container-list-of-songs',
        collection: songsList,
      });
      songListDisplay.render();
    });
  },
});

export { PlaylistView };
