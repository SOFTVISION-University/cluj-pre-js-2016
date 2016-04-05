import { PlaylistModel } from './playlistModel.js';
import { SongsCollection } from '../songs/songsCollection.js';

const PlaylistsCollection = Backbone.Collection.extend({
  model: PlaylistModel,
  url: 'http://localhost:3000/playlists',
  parse(arrayOfPlaylistObjects) {
    return arrayOfPlaylistObjects.map((playlistObject) => {
        const attrs = {
          id: playlistObject.id,
          title: playlistObject.title,
          description: playlistObject.description,
          imageLarge: playlistObject.imageLarge,
          imageSmall: playlistObject.imageSmall
        };
        const playlist = new PlaylistModel(attrs);
        return playlist;
      });
  }
});
 export { PlaylistsCollection };
