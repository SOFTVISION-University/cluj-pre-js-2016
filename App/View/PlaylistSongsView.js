import { PlayListHeaderView } from './PlayListHeaderView.js'
const PlaylistSongsView = Backbone.View.extend({
  render() {
    const playListHeaderView = new PlayListHeaderView({
      model,
    });
    this.el.appendChild(playListHeaderView.render().el);
  },
});
export { PlaylistSongsView };
