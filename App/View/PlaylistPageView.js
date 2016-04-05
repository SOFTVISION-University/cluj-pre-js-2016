import { HeaderView } from './HeaderView.js'
import { PlaylistCollection } from '../Collection/PlaylistCollection.js'
import { PlaylistCollectionView } from '../View/PlaylistCollectionView.js'
const PlaylistPageView = Backbone.View.extend({
  initialize() {
    this.listenTo(Backbone, 'deletePlaylistPage', this.deleteThis);
  },
  nestedViews: [],
  addToNestedView(view) {
    this.nestedViews.push(view);
  },
  deleteThis() {
    this.nestedViews.forEach(this.removeView);
  },
  removeView(view) {
    view.remove();
  },

  template(values) {
    const templateText = document.querySelector('#playlist-page-template').innerText;
    const compiled = _.template(templateText);
    if (values !== null) {
      return compiled(values);
    }
    return compiled();
  },
  render() {
    this.$el.append(this.template(this.model));
    const headerView = new HeaderView({
      model: this,
      el: document.getElementById('header-div'),
    });
    headerView.render();
    this.addToNestedView(headerView);
    const playlistPV = this;
    const playlistCollection = new PlaylistCollection();
    playlistCollection.fetch().done(() => {
      const playlistsHolder = document.getElementById('playlist-holder');
      const playlistCollectionView = new PlaylistCollectionView({
        el: playlistsHolder,
        collection: playlistCollection,
      });
      playlistCollectionView.render();
      playlistPV.addToNestedView(playlistCollectionView);

    });
    debugger;
    return this;
  },
});

export { PlaylistPageView };
