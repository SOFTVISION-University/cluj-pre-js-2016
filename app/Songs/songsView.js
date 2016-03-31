import { SongView } from './songView.js';
const SongsView = Backbone.View.extend({

  _nestedView: [],
  renderNestedView(view) {
    this._nestedView.push(view);
    this.$el.append(view.el);
  },
  render() {
    const that = this;
    const partEl = this.el;
    this.collection.forEach((model) => {
      const songView = new SongView({
        model: model,
      });
      songView.render();
      that.renderNestedView(songView, partEl);
    });


    return this;
  },
  destroy_view() {
    this.undelegateEvents();
    this.$el.removeData().unbind();
    this.remove();
    Backbone.View.prototype.remove.call(this);
  },
});
export { SongsView } ;
