import { AccountService } from './AccountService.js';
import { PlaylistCollection } from './Collection/PlaylistCollection.js';
import { PlaylistCollectionView } from './View/PlaylistCollectionView.js';

// const link = 'http://192.168.28.109:3000/playlists';

function createPlayLists(playlistCollection) {
  const playlistCollectionView = new PlaylistCollectionView({
    el: document.getElementById('playlist-holder'),
    collection: playlistCollection,
  });
  playlistCollectionView.render();
}

function createPlaylistsModel() {
  const playlistCollection = new PlaylistCollection();
  playlistCollection.fetch().done(() => {
    createPlayLists(playlistCollection);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (AccountService.getInstance().loggedUser !== null) {
    document.getElementById('signInButton').style.visibility = 'hidden';
    document.getElementById('logOutButton').style.visibility = 'visible';
    const message = 'Hello ${ AccountService.getInstance().loggedUser.name }  !';
    document.getElementById('username').innerText = message;
  }
  else {
    document.getElementById('logOutButton').style.visibility = 'hidden';
    document.getElementById('username').innerText = '';
  }

// getLinkContent();
// createPlayLists();
  createPlaylistsModel();
});
