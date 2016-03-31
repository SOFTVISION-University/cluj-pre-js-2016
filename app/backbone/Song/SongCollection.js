import { SongModel } from './SongModel.js';

const SongCollection = Backbone.Collection.extend({
	model: SongModel,
	});

export { SongCollection };
