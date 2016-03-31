var PlaylistCollection = Backbone.Collection.extend({
  model: PlaylistModel,
  url: 'http://192.168.28.109:3000/playlists',
  parse : function (resp){
    return resp.map(function(playlist) {
      var model = new PlaylistModel();
      model.set(playlist);
      return model;
    });
  }
});
