import { PlayListModel } from './playlist-model.js';
import { SongModel } from '../songs/song-model.js';
import { SongsCollection } from '../songs/songs-list-item-view.js';

const PlayListCollection = Backbone.Collection.extend({
  model: PlayListModel,
  url: 'http://localhost:3000/playlists',
  parse(response) {
    return response.map((val) => {
      const attrib=_.omit(val, 'songs');
      const parsedElementPlaylist = new PlayListModel(attrib);
      const songs= SongsCollection.fromJSON(val.songs);
      parsedElementPlaylist.setSongs(songs);
      console.log('13',parsedElementPlaylist.setSongs(songs));
      return parsedElementPlaylist;
      // const parsedElementPlaylist = new PlayListModel(val);
  // console.log(parsedElementPlaylist);
  // return parsedElementPlaylist;
    });
  },
});

export { PlayListCollection };
