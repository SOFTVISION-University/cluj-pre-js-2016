var Playlists = Backbone.Collection.extend({
  model : Playlist1,
	url :  'http://192.168.28.109:3000/playlists',
  parse : function (resp){
    return resp.map(function(playlists) {
      var model = new Playlist1();
	     model.set(playlists);
			return model;

		});
  }
});
