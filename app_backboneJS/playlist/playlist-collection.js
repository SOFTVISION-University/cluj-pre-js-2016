import { Playlist } from './playlist-model';

const PlaylistCollection = Backbone.Collection.extend({
  model: Playlist,
});

export { PlaylistCollection };
