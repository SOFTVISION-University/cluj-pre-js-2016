import { PlaylistCollection } from './collections/playlist-col';
import { PlaylistsColView } from './views/playlist-view';
import { LoginView } from './views/login-view';


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
});
