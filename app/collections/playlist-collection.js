import { PlaylistModel } from '../models/playlist-model.js';
const PlaylistCollection = Backbone.Collection.extend({
  model: PlaylistModel,
  url: 'http://localhost:3000/playlists',
  parse(response) {
    return response.map((playlist) => {
      const playlistModel = new PlaylistModel();
      playlistModel.set(playlist);
      return playlistModel;
    });
  },
});

export { PlaylistCollection };
