import { IndividualPlaylistModel } from './IndividualPlaylistModel.js';

const IndividualPlaylistCollection = Backbone.Collection.extend({
  model: IndividualPlaylistModel,
  url: 'http://localhost:3000/playlists',
  parse(response) {
    return response;
  },
  safeFetch() {
    if (this.length > 0) {
      return Promise.resolve();
    }
    return this.fetch();
  },
});

export { IndividualPlaylistCollection };
