import { Playlist } from './playlist-model';
import { SongsCollection } from '../song/song-collection';

const PlaylistCollection = Backbone.Collection.extend({
  model: Playlist,
  url: 'http://localhost:3000/playlists',
  parse(respone) {
    return respone.map((val) => {
      const attrs = _.omit(val, 'songs');
      const playlist = new Playlist(attrs);
      const songs = SongsCollection.fromJSON(val.songs);
      playlist.setSongs(songs);
      return playlist;
    });
  },
});

export { PlaylistCollection };
