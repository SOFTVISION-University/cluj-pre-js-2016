import { SongModel } from './songModel.js';
const SongsCollection = Backbone.Collection.extend({
  model: SongModel,
  setSongs: function(songName){
    this.songName = songName;
  }
});

export { SongsCollection };
