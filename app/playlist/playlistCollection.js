var PlaylistsCollection = Backbone.Collection.extend({
  model : PlaylistModel,
	url :  'http://192.168.28.109:3000/playlists',
  parse : function (resp){
    return resp.map(function(playlists) {
      var model = new PlaylistModel();
	     model.set(playlists);
			return model;

		});
  }
});
