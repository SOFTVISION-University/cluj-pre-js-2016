import { PlaylistView } from './PlaylistView.js';
const PlaylistCollectionView = Backbone.View.extend({
  render() {
    const collView = this;
    this.collection.forEach((model) => {
      const playlistView = new PlaylistView({
        model,
      });
      collView.el.appendChild(playlistView.render().el);
    });
  },
});
export { PlaylistCollectionView };
