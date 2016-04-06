import { PlaylistView } from './playlistView.js';
const PlaylistsView = Backbone.View.extend({
  _nestedView: [],
  renderNestedView(view) {
    this._nestedView.push(view);
    this.$el.append(view.el);
  },
  render() {
    const that = this;
    const partEl = this.el;
    this.collection.forEach((model) => {
      const playlistView = new PlaylistView({
        model: model,
      });
      playlistView.render();
      that.renderNestedView(playlistView, partEl);
    });


    return this;
  },
});
export { PlaylistsView } ;
