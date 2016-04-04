import { SongModel } from './songModel';
const SongsListColection = Backbone.Collection.extend({
  model: SongModel,
});
export { SongsListColection } ;
