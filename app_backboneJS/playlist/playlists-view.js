import { PlaylistView } from './playlist-view';
const PlaylistsView = Backbone.View.extend({
  template : _.template("<div class='wrapper-image'></div>"),
  _nestedView: [],
  renderNestedView(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render: function () {
    this.$el.html(this.template());
    const that = this;
    const partEl = $(this.el.querySelector('.wrapper-image'));
    this.collection.forEach(function(model) {
      const playlistView = new PlaylistView({
        model,
      });
      playlistView.render();
      that.renderNestedView(playlistView, partEl);
    });
    return this;
  },
});

export { PlaylistsView };
