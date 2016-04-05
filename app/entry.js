
import { PlaylistsCollection } from './playlist/playlistCollection.js';
import { UserModel } from './User/userModel.js';
import { Router } from './routerBackbone.js';

$(function () {
  const userModel = new UserModel();
  const playlists = new PlaylistsCollection();
  const router = new Router();
  router.setPlaylists(playlists);
  router.setCurrentUser(userModel);
  Backbone.history.start();
});
