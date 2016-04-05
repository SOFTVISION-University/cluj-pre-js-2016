import { PlaylistModel } from '../models/playlist-model';

const PlaylistCollection = Backbone.Collection.extend({
  model: PlaylistModel,
  url: 'http://localhost:3000/playlists',
  safeFetch() {
    if (this.length) {
      return Promise.resolve();
    }
    return this.fetch();
  },
  parse(resp) {
    return resp.map((songs) => {
      const model = new PlaylistModel();
      model.set(songs);
      return model;
    });
  },
});

export { PlaylistCollection };
