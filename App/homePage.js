import { AccountService } from './AccountService.js';
import { LoginView } from './View/LoginView.js';
import { HeaderView } from './View/HeaderView.js';
import { PlaylistCollection } from './Collection/PlaylistCollection.js';
import { PlaylistCollectionView } from './View/PlaylistCollectionView.js';

// const link = 'http://192.168.28.109:3000/playlists';

function createPlayLists(playlistCollection) {
  const playlistsHolder = document.createElement('div');
  playlistsHolder.id = 'playList-holder';
  document.getElementById('playlist-holder').appendChild(playlistsHolder);
  const playlistCollectionView = new PlaylistCollectionView({
    el: playlistsHolder,
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

function addLoginView() {
  const loginView =  new LoginView({
    el: document.getElementById('login-div'),
  });
  loginView.render();
}

function addHeaderView() {
  const headerView =  new HeaderView({
    el: document.getElementById('header-div'),
  });
  headerView.render();
}

document.addEventListener('DOMContentLoaded', () => {
  addLoginView();
  addHeaderView();
  createPlaylistsModel();
});
