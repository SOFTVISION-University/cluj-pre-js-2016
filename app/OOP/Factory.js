import { Playlist } from './OOP/playlist.js';
import { Song } from './OOP/song.js';
function ModelFactory() {

}

ModelFactory.create = function create(type, data) {
  if (type === 'Playlist') {
    return new Playlist(data);
  }
  if (type === 'Song') {
    return new Song(data);
  }
  return "The model doesn't exist";
};

export { ModelFactory };
