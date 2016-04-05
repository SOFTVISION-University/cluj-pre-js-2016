import { PlaylistModel } from './PlaylistModel.js';
import { SongsCollection } from '../song/SongsCollection.js';

const PlaylistsCollection = Backbone.Collection.extend({
  model: PlaylistModel,
  url: 'http://localhost:3000/playlists',
  parse(result) {
    return result.map((playlist) => {
      const attrPlaylist = _.omit(playlist, 'songs');
      const playlistModel = new PlaylistModel();
      playlistModel.set(attrPlaylist);

      const songsColection = new SongsCollection();

      songsColection.set(
        playlist.songs.map((song) => {
          return {
            id: song.gsx$id.$t,
            album: song.gsx$album.$t,
            name: song.gsx$name.$t,
            length: song.gsx$length.$t,
            image: song.gsx$image.$t,
          };
        })
    );
      playlistModel.setSongs(songsColection);
      return playlistModel;
    });
  },
});

export { PlaylistsCollection };
