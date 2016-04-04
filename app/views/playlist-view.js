import { SongsListView } from '../views/songs-list-view.js';
const PlaylistView = Backbone.View.extend({
  tagName: 'li',
  className: 'playlist-view',
  events: {
    'click .explore': 'explorePlaylist',
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
    return this.renderTemplate('#template-PlaylistView', this.model.attributes);
  },
  render() {
    this.$el.html(this.template());
    return this;
  },

  _setSongsListView(view) {
    if (this.songsListView) {
      this.songsListView.remove();
    }
    this.songsListView = view;

    if (view !== null) {
      this.songsListView.render();
      this.listenTo(this.songsListView, 'destroy', this._setSongsListView.bind(this, null));
      this.$el.append(this.songsListView.el).hide().fadeIn();
    }
  },

  explorePlaylist() {
    this._setSongsListView(new SongsListView({
      collection: this.model.songs,
      model: this.model,
    }));
  },
});

export { PlaylistView };
