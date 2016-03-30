var PlaylistModel = Backbone.Model.extend({
  default:{
    "name":"title"
  },
  setSongs: function(songsJSON) {
    this.songs = new SongCollection(songsJSON);
  }
});
