import { PlaylistCardView } from './PlaylistView.js';
const PlaylistCollectionView = Backbone.View.extend({
  render() {
    const collView = this;
    this.collection.forEach((model) => {
      const playlistView = new PlaylistCardView({
        model,
      });
      collView.el.appendChild(playlistView.render().el);
    });
  },
});
export { PlaylistCollectionView };
