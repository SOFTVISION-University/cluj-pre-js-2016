import { SongModel } from '../models/song-model.js';
const SongCollection = Backbone.Collection.extend({
  model: SongModel,
  url: 'http://localhost:3000/playlists',
  parse(response) {
    return _.flatten(response.map((playlist) => {
      return playlist.songs.map((song) => new SongModel(song));
    }));
  },
});

export { SongCollection };
