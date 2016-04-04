import { PlaylistCollection } from './collections/playlist-col';
import { PlaylistsColView } from './views/playlist-view';
import { LoginView } from './views/login-view';
import { LoginStatusView } from './views/login-status-view';


$(() => {
  const playlistcol = new PlaylistCollection();
  playlistcol.fetch().done(() => {
    const cards = new PlaylistsColView({
      el: $('#centeredWrapper')[0],
      collection: playlistcol,
    });
    cards.render();
  });

  const logview = new LoginView({
    el: $('#loginDiv')[0],
  });
  logview.render();

  const statusView = new LoginStatusView({
    el: $('#header')[0],
  });
  statusView.render();
});
