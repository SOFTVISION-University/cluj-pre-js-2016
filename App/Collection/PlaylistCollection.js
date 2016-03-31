import { PlaylistModel } from '../Model/PlaylistModel.js';
const PlaylistCollection = Backbone.Collection.extend({
  model: PlaylistModel,
  url: 'http://localhost:3000/playlists',
  parse(resp) {
    return resp.map((playlist) => {
      const model = new PlaylistModel();
      model.set(playlist);
      return model;
    });
  },
});
export { PlaylistCollection };
