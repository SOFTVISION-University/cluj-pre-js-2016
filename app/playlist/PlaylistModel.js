import { SongsCollection } from '../song/SongsCollection.js';

const PlaylistModel = Backbone.Model.extend({
  url: 'http://localhost:3000/playlists',
  constructor: function constructor() {
    this.songs = new SongsCollection();
    Backbone.Model.apply(this, arguments);
  },
});

export { PlaylistModel };
