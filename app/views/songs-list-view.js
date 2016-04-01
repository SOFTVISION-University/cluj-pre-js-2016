import { SongListItemView } from '../views/song-list-item-view.js';
import { SongsListHeaderView } from '../views/songs-list-header-view.js';
const SongsListView = Backbone.View.extend({
  className: 'playlist-expand',
  events: {
    'click .close-button': 'closePlaylist',
  },
  renderTemplate(selectorString, options) {
    const templateText = document.querySelector(selectorString).innerText;
    const compiled = _.template(templateText);
    if (options !== null) {
      return compiled(options);
    }
    return compiled();
  },
  template() {
    return this.renderTemplate('#template-SongsListView');
  },
  _nestedView: [],
  renderNestedView(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render() {
    const playlistModel = this.model;
    playlistModel.fetch().done(() => {
      const songsListHeaderView = new SongsListHeaderView({
        el: document.getElementById('songs-list-header'),
        model: playlistModel,
      });
      songsListHeaderView.render();
    });
    this.$el.html(this.template());
    const that = this;
    const songEl = $(this.el.querySelector('#playlist-songs-body'));
    this.collection.forEach((model) => {
      const songListItemView = new SongListItemView({
        model,
      });
      songListItemView.render();
      that.renderNestedView(songListItemView, songEl);
    });
  },

  closePlaylist() {
    this.trigger('destroy');
  },
});

export { SongsListView };
