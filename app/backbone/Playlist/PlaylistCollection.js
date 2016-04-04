// import { PlaylistModel } from './PlaylistModel.js';

const PlaylistCollection = Backbone.Collection.extend({
	model: PlaylistModel,
	url: 'http://localhost:3000/playlists',
	parse(response) {
		return response.map((res) => {
			const element = new PlaylistModel(res);
			return element;
		});
	},
});

// export { PlaylistCollection };
