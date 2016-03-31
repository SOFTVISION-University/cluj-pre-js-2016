import { SongModel } from '../models/song-model';

const SongCollection = Backbone.Collection.extend({
  model: SongModel,
});

export { SongCollection };
