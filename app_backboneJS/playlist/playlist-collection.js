import { Playlist } from './playlist-model';

const PlaylistCollection = Backbone.Collection.extend({
  model: Playlist,
  url: 'http://localhost:3000/playlists',
  parse(respone) {
    return respone.map((val) => {
      const parsedElementPlaylist = new Playlist(val);
      return parsedElementPlaylist;
    });
  },
});

export { PlaylistCollection };
