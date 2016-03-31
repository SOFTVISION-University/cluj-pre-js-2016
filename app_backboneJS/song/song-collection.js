import { Song } from './song-model.js';
const SongsCollection = Backbone.Collection.extend({
  model: Song,
});

export { SongsCollection };
