import { SongView } from './SongView.js';
const SongCollectionView = Backbone.View.extend({
  render() {
    const that = this;
    this.collection.forEach((model) => {
      const songView = new SongView({
        model,
      });
      that.el.appendChild(songView.render().el);
    });
  },
});
export { SongCollectionView };
