// import { PlaylistView } from './PlaylistView.js';

const PlaylistsView = Backbone.View.extend({
  template: _.template("<p>List of playlists</p><div class='user'></div><ul class='playlists-view'></ul>"),
  _nestedView: [],
  renderNestedView(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render() {
    this.$el.html(this.template());
    const that = this;
    const partEl = $(this.el.querySelector('.playlists-view'));
    this.collection.forEach(function (model) {
      const playlistItemView = new PlaylistItemView({
        model: model,
      });
      playlistItemView.render();
      that.renderNestedView(playlistItemView, partEl);
    });
    return this;
  },
});

const playlists = new PlaylistCollection();
playlists.fetch().done(() => {
  const view = new PlaylistItemView({
    el: document.getElementById('container'),
    collection: playlists,
  });
  view.render();
});


// export { PlaylistsView };
