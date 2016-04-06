import { SongsListColection } from './songsCollection.js';
import { SongsView } from './songsView.js';
import { HeaderView } from './headerPlaylist.js';

export const ContainerPlaylistSongs = Backbone.View.extend({
  events: {
    'click ': 'closePlaylist',
  },
  initialize() {
    this.songs = new SongsListColection();
    this.songs.set(this.model.attributes.songs);
    this.songsView = new SongsView({
      el: document.getElementById('name_songs'),
      collection: this.songs,
    });
    this.headerView = new HeaderView({
      el: document.getElementById('footer_playlist'),
      model: this.model,
    });
  },
  render() {
    this.songsView.render();
    this.headerView.render();
    this.openPlaylist();
  },
  openPlaylist() {
    const x = document.getElementById('pop_playlist1');
    x.style.transition = '0.5s';
    x.style.height = '800px';
  },
  closePlaylist() {
    const x = document.getElementById('pop_playlist1');
    x.style.transition = '0.5s';
    x.style.height = '0px';
    const list = document.getElementById('name_songs');
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
  },

		});
