import { SongModel } from './modelSong.js';
const SongsItem = Backbone.Collection.extend({
  model: SongModel,
},
  {
    parseFromJson(playlistJSON) {
      const songs = playlistJSON.map((val) => {
        return {
          image: val.gsx$image.$t,
          songTitle: val.gsx$name.$t,
          songAuthor: val.gsx$album.$t,
          songLength: val.gsx$length.$t,
        };
      });
      const song = new SongsItem(songs);
      return song;
    },
  });
export { SongsItem };
