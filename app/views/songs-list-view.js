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
    this.$el.html(this.template());
    const songsListHeaderView = new SongsListHeaderView({
      el: this.el.querySelector('.songs-list-header'),
      model: this.model,
    });
    songsListHeaderView.render();
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
