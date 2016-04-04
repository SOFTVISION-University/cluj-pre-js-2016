import { PlaylistCollection } from './playlist/playlist-collection.js';
import { PlaylistsView } from './playlist/playlists-view.js';
import { LogInView } from './user/log-in-view.js';

export function startApp() {
  const logInView = new LogInView({
    el: document.getElementById('container'),
  });
  logInView.render();
  const playlists = new PlaylistCollection();
  playlists.fetch().done(() => {
    const pageView = new PlaylistsView({
      el: document.getElementById('page'),
      collection: playlists,
    });
    pageView.render();
  });
}
