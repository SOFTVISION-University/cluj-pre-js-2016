import { SongListItemView } from './viewSong.js';
const SongsListView = Backbone.View.extend({
  template: _.template("<table class='song-items'></table>"),
  _nestedView: [],
  renderNestedView(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render() {
    this.$el.html(this.template);
    const that = this;
    const partEl = $(this.el.querySelector('.song-items'));
    this.collection.forEach(function(model) {
      const songView = new SongListItemView({
        model,
      });
      songView.render();
      that.renderNestedView(songView, partEl);
    });
  },
});

export { SongsListView }
