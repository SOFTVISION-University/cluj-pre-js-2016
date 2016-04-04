import { PlaylistModel } from '../models/playlist-model.js';
import { SongCollection } from '../collections/song-collection.js';
const PlaylistCollection = Backbone.Collection.extend({
  model: PlaylistModel,
  url: 'http://localhost:3000/playlists',
  parse(response) {
    return response.map((val) => {
      const attrs = _.omit(val, 'songs');
      const playlistModel = new PlaylistModel(attrs);
      const songs = SongCollection.fromJSON(val.songs);
      playlistModel.setSongs(songs);
      return playlistModel;
    });
  },
});

export { PlaylistCollection };
