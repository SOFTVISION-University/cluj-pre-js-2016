import { SongModel } from './SongModel.js';

const SongsCollection = Backbone.Collection.extend({
  model: SongModel,
}
);

export { SongsCollection };
