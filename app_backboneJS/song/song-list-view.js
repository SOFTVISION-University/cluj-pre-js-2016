import { SongListItemView } from './song-list-item-view';
import { SongListHeaderView } from './song-list-header-view';

const SongsListView = Backbone.View.extend({
  template: _.template("<div class='song-list-view'></div>"),
  _nestedView: [],
  events: {
    'click #closeB': 'closeListOfSongs',
  },
  renderNestedView(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render: function () {
    this.$el.html(this.template());
    const that = this;
    const partEl = $(this.el.querySelector('.song-list-view'));
    const headerPlaylistView = new SongListHeaderView({
      model: this.collection,
    });
    headerPlaylistView.render();
    this.renderNestedView(headerPlaylistView, partEl);
    this.collection.songs.forEach((model) => {
      const songItemView = new SongListItemView({
        model,
      });
      songItemView.render();
      that.renderNestedView(songItemView, partEl);
    });
    return this;
  },
  closeListOfSongs() {
    const elem = window.querySelector('#playlist-songs');
    if (elem.style.visibility === 'visible') {
      elem.style.visibility = 'hidden';
    }
  },
});
export { SongsListView };
