import { PlaylistModel } from '../models/playlist-model';

const PlaylistCollection = Backbone.Collection.extend({
  model: PlaylistModel,
  url: 'http://localhost:3000/playlists',
  parse(resp) {
    return resp.map((songs) => {
      const model = new PlaylistModel();
      model.set(songs);
      return model;
    });
  },
});

export { PlaylistCollection };
