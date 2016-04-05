import { PlaylistCollection } from './playlist/playlist-collection.js';
import { PlaylistsView } from './playlist/playlists-view.js';
import { LogInView } from './user/log-in-view.js';
import { User } from './user/user-model.js';

export function startApp() {
  const user = new User();
  const logInView = new LogInView({
    el: document.getElementById('container'),
    model: user,
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
