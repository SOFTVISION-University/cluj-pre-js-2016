import { PlaylistItemView } from './playlistItemsView.js';
const PlaylistsView = Backbone.View.extend({
  className: 'playlists-view',
  _nestedView: [],
  renderNestedView(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render() {
    const that = this;
    this.collection.forEach(function (model) {
      const songView = new PlaylistItemView({
        model,
      });
      songView.render();
      that.renderNestedView(songView, that.$el);
    });
  },
});

export { PlaylistsView };
