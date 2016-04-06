import { PlaylistModel } from './playlistModel';
const PlaylistsCollection = Backbone.Collection.extend({
  model: PlaylistModel,
  url: 'http://localhost:3000/playlists',
  safeFetch() {
    if (this.length) {
      return Promise.resolve();
    }
    return this.fetch();
  },

  parse(resp) {
    return resp.map((play) => {
      const model = new PlaylistModel();
      model.set(play);
      return model;
    });
  },
});

export { PlaylistsCollection } ;
