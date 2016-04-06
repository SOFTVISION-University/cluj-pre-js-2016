
import { SongModel } from './song-model.js';
import { SongListItemView } from './song-list-item-view.js';

const SongsCollection = Backbone.Collection.extend({
  model: SongModel,
},
  {
    fromJSON(songsJSON)
    {
      const songs = songsJSON.map((song) =>{
        return {
          id: +new Date(),
          image: song.gsx$image.$t,
          songAuthor: song.gsx$name.$t,
          songLength: song.gsx$length.$t,
        };
      });
      return new SongsCollection(songs);
    },
  });

export { SongsCollection };
