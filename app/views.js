
import { SongModel } from './songs/song-model.js';
import { SongListItemView } from './songs/song-list-item-view.js';
import { SongsCollection } from './songs/songs-list-item-view.js';
import { SongsListView } from './songs/songs-view.js';
import { PlayListModel } from './playlist/playlist-model.js';
import { PlaylistItemView } from './playlist/playlist-item-view.js';
import { PlayListsModels } from './playlist/playlists-items-view.js';
import { PlayListsView } from './playlist/playlists-items-view.js';
import { PlayListCollection } from './playlist/playlistAPI.js';

const viewFunction = $(function () {

  const playlistAPI = new PlayListCollection();

  playlistAPI.fetch().done(() => {
    const pageView = new PlayListsView({
      el: document.getElementById('playlist-content'),
      collection: playlistAPI,
    });
    pageView.render();
  });
});
export { viewFunction };
