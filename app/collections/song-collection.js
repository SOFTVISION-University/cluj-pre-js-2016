import { SongModel } from '../models/song-model.js';
const SongCollection = Backbone.Collection.extend({
  model: SongModel,
}, {
  fromJSON(songsJSON) {
    const songs = songsJSON.map((song) => {
      return {
        image: song.gsx$image.$t,
        songName: song.gsx$name.$t,
        songAlbum: song.gsx$album.$t,
        songLength: song.gsx$length.$t,
      };
    });
    return new SongCollection(songs);
  },
});

export { SongCollection };
