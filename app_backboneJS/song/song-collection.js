import { Song } from './song-model.js';
const SongsCollection = Backbone.Collection.extend({
  model: Song,
  url: 'http://localhost:3000/playlists',
  parse(respone) {
    return respone.songs.map((val) => {
      const parsedElementSong = new Song(val);
      return parsedElementSong;
    });
  },
});

export { SongsCollection };
