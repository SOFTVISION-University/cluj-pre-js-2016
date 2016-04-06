const PlaylistCollection = Backbone.Collection.extend({
  model: PlaylistModel,
  url: 'http://localhost:3000/playlists',
  parse(response) {
    return response.map((val) => {
      const parsedPlaylist = new PlaylistModel (val);
      return parsedPlaylist;
    });
  },
});

const PlaylistsCollection = new PlaylistCollection();
PlaylistsCollection.fetch({
  success(PlaylistsCollection){
		console.log(PlaylistsCollection.toJSON());
	}
});
