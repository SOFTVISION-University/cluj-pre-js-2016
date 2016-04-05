import { SongsCollection } from './song/SongsCollection.js';
import { PlaylistModel } from './playlist/PlaylistModel.js';
import { PlaylistsCollection } from './playlist/PlaylistsCollection.js';
import { HomepageView } from './app/homepageView.js';
import { PlaylistsListView } from './playlist/playlistsListView.js';


export function startApp() {
  const playlistsList = new PlaylistsCollection();
  const playlistsJSON = new PlaylistsCollection();
  playlistsJSON.fetch().done(() => {
    const playlistsView = new PlaylistsListView({
      el: document.getElementsByClassName('music-container'),
      collection: playlistsJSON,
    });
    return playlistsView.render();
  });

  const homepageViewItem = new HomepageView({
    el: $('#page')[0],
    playlistsList: playlistsList,

  });
  homepageViewItem.render();
}
