import { SongModel } from '../Model/SongModel.js';
const SongCollection = Backbone.Collection.extend({
  model: SongModel,
});
export { SongCollection };
