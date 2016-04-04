import { SongsListColection } from '../Songs/songsCollection.js';
import { SongsView } from '../Songs/songsView.js';
import { HeaderView } from '../Songs/headerPlaylist.js';

function closePlaylist() {
  const x = document.getElementById('pop_playlist1');
  x.style.transition = '0.5s';
  x.style.height = '0px';
  const list = document.getElementById('name_songs');
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

function openPlaylist() {
  const x = document.getElementById('pop_playlist1');
  x.style.transition = '0.5s';
  x.style.height = '800px';
}
function newSongsView(model) {
  const songs = new SongsListColection();
  songs.set(model);

  const pageView = new SongsView({
    el: document.getElementById('name_songs'),
    collection: songs,
  });
  pageView.render();
}


const PlaylistView = Backbone.View.extend({
  events: {
    'click .button_playlist': 'openSongView',
  },
  openSongView() {
    closePlaylist();
    newSongsView(this.model.attributes.songs);
    openPlaylist();
    const head = new HeaderView({
      el: document.getElementById('footer_playlist'),
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
