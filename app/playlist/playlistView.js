import { SongsListColection } from '../Songs/songsCollection.js';
import { SongsView } from '../Songs/songsView.js';
import { HeaderView } from '../Songs/headerPlaylist.js';
const PlaylistView = Backbone.View.extend({
  events: {
    'click #button_playlist_top': 'openSongView',
  },
  openSongView() {
    const songs = new SongsListColection();
    songs.set(this.model.attributes.songs);

    const pageView = new SongsView({
      el: document.getElementById('name_songs'),
      collection: songs,
    });
    pageView.render();
    const head = new HeaderView({
      model: this.model,
    });
    head.render();
  },
  renderTemplate(selectorString, options) {
    const templateText = document.querySelector(selectorString).innerText;
    const compiled = _.template(templateText);
    if (options !== null) {
      return compiled(options);
    }
    return compiled();
  },
  template(val) {
    return this.renderTemplate('#template-Playlist', val);
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});
export { PlaylistView } ;
