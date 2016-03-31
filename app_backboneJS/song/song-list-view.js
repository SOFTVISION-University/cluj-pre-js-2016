import { SongListItemView } from './song-list-item-view';

const SongsListView = Backbone.View.extend({
  template: _.template("<div class='song-list-view'></div>"),
  _nestedView: [],
  renderNestedView(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render: function () {
    this.$el.html(this.template());
    const that = this;
    const partEl = $(this.el.querySelector('.song-list-view'));
    this.collection.forEach(function(model) {
      const songItemView = new SongListItemView({
        model,
      });
      songItemView.render();
      that.renderNestedView(songItemView, partEl);
    });
    return this;
  },
});
export { SongsListView };
