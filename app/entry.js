
import { PlaylistsCollection } from './playlist/playlistCollection.js';
import { PlaylistsView } from './playlist/playlistsView.js';
import { LogInView } from './logIn/logInView.js';
import { user } from './User/userObj.js';
import { UserModel } from './User/userModel.js';
import { HeaderView } from './header/headerView.js';



$(function () {
  const userModel = new UserModel();
  const logView = new LogInView({
    model: userModel,
    el: document.getElementById('logIn'),
  });
  logView.render();
  const headerView = new HeaderView({
    model: userModel,
    el: document.getElementById('container'),
  });
  headerView.render();
  const playlists = new PlaylistsCollection();
  playlists.fetch().done(function () {
    const playlist = new PlaylistsView({
      el: document.getElementById('playlist1'),
      collection: playlists,

    });

    playlist.render();
  });
});
