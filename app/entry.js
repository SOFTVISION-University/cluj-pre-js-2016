

import { openPlaylist } from './java_index.js';
import { playlistChangeHeader } from './java_index.js';
import { SongsListColection } from './java_index.js';
import { playlistsFromServer } from './java_index.js';
import { clearPlaylist } from './java_index.js';


$(function() {
  playlistsFromServer();
});
