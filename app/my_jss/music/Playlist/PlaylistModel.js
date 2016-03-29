var PlaylistModel = Backbone.Model.extend({
defaults : {
  id : undefined,
  title : undefined,
  description : undefined,
  imageLarge : undefined,
  imageSmall : undefined,
},
  addSongCollection : function(songs) {
    this.songs = songs;
  }
});
