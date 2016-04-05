import { PlaylistModel } from './PlaylistModel.js';
import { SongsCollection } from '../song/SongsCollection.js';

const PlaylistsCollection = Backbone.Collection.extend({
  model: PlaylistModel,
  url: 'http://localhost:3000/playlists',
  parse(result) {
    return result.map((playlist) => {
      const playlistModel = new PlaylistModel();
      playlistModel.set(playlist);

      const songsColection = new SongsCollection();

      debugger;
      songsColection.set(
        () => {
          debugger;
          const songsList = playlist.songs.map(function (song) {
            return {
              id: song.gsx$id.$t,
              album: song.gsx$album.$t,
              name: song.gsx$name.$t,
              length: song.gsx$length.$t,
              image: song.songs.gsx$image.$t,
            };
          });
          return new SongsCollection(songsList);
        }
    );

      playlistModel.set(songsColection);

      return playlistModel;
    });
  },
});

export { PlaylistsCollection };
