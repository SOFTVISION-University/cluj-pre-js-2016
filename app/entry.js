import { LoginView } from './views/login-view';
import { AppRouter } from './router';
import { UserModel } from './models/user-model';
import { PlaylistCollection } from './collections/playlist-col';


$(() => {
  const globalUserModel = new UserModel();
  const playlistCollection = new PlaylistCollection();
  const app = new AppRouter();
  app.setPlaylists(playlistCollection);
  app.setCurrentUser(globalUserModel);

  Backbone.history.start();

  // const logInView = new LoginView({
  //   model: globalUserModel,
  //   el: $('#loginDiv')[0],
  // });
  // logInView.render();
});
