import { Song } from './song-model.js';
const SongsCollection = Backbone.Collection.extend({
  model: Song,
}, {
  fromJSON(songsJSON) {
    const songs = songsJSON.map((song) => {
      return {
        image: song.gsx$image.$t,
        songAuthor: song.gsx$name.$t,
        songLength: song.gsx$length.$t,
      };
    });
    return new SongsCollection(songs);
  },
});

export { SongsCollection };
