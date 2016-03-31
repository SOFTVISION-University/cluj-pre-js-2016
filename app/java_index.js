import { PlaylistsCollection } from './playlist/playlistCollection.js';
import { PlaylistsView } from './playlist/playlistsView.js';


function openPlaylist() {
  const x = document.getElementById('pop_playlist1');
  x.style.transition = '0.5s';
  x.style.height = '800px';
}

function clearPlaylist() {
  const list = document.getElementById('name_songs');
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
function playlistsFromServer() {
  const playlists = new PlaylistsCollection();
  playlists.fetch().done(function () {
    const playlist = new PlaylistsView({
      el: document.getElementById('playlist1'),
      collection: playlists,

    });

    playlist.render();
  });
}

function createSongsList() {
  clearPlaylist(); // clear songs in playlist
  openPlaylist();
}

/* function close1(){
  const x = document.getElementById('pop_playlist1');
  x.style.transition = '0.5s';
  x.style.height = '0px';
}*/


export { openPlaylist, createSongsList, playlistsFromServer, clearPlaylist };
