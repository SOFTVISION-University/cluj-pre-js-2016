import { SongCollection } from '../collections/song-col';
import { SongsView } from '../views/song-view';
import Utils from '../utils.js';

const PlaylistCardView = Backbone.View.extend({
  template: _.template($('#template-PlaylistView').html()),
  el: $('#centeredWrapper')[0],
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  events: {
    'click .explorePlaylist': 'popPlaylist',
  },
  popPlaylist() {
    const test = new SongCollection();
    test.set(this.model.attributes.songs);
    const songlist = new SongsView({
      el: $('#playlists')[0],
      collection: test,
    });
    songlist.render();
    Utils.slidePlayListIn(document.getElementById('playlists'));
  },
});

const PlaylistsColView = Backbone.View.extend({
  _nestedView: [],

  renderNestedView(view) {
    this._nestedView.push(view);
    this.$el.append(view.el);
  },

  render() {
    const that = this;
    this.collection.forEach((model) => {
      const playlistview = new PlaylistCardView({
        model: model,
      });
      playlistview.render();
      that.renderNestedView(playlistview);
    });
    return this;
  },
});

export { PlaylistCardView, PlaylistsColView };
