import { LoginView } from './View/LoginView.js';
import { UserModel } from './Model/UserModel.js';
import { HeaderView } from './View/HeaderView.js';
import { SignUpView } from './View/SignUpView.js';
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
  const loginView = new LoginView({
    model: new UserModel(),
    el: document.getElementById('login-div'),
  });
  loginView.render();
}

function addSignUpView() {
  const signUpView = new SignUpView({
    el: document.getElementsByClassName('sign-up-div')[0],
  });
  signUpView.render();
}

function addHeaderView() {
  const headerView = new HeaderView({
    el: document.getElementById('header-div'),
  });
  headerView.render();
}


document.addEventListener('DOMContentLoaded', () => {
  // addLoginView();
  // addHeaderView();
  // addSignUpView();
  // createPlaylistsModel();
});
