import { PageRouter } from './PageRouter.js';
import { IndividualPlaylistCollection } from './music/Playlists/IndividualPlaylistCollection.js';
import { UserModel } from './LoginFunctionality/UserModel.js';

const playlistCollection = new IndividualPlaylistCollection();
const pageRouter = new PageRouter();
const userModel = new UserModel();

pageRouter.setPlaylists(playlistCollection);
pageRouter.setUser(userModel);
Backbone.history.start();
