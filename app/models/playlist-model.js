var PlaylistModel = Backbone.Model.extend({
  defaults: {
    id: 0,
    title : "default",
    desc : "default desc",
    imageLarge : "../core/assets/beats-like-birds.png",
    length : "3:33",
    songs : []
  },

  setSongs: function(songsJSON) {
    this.songs = new SongCollection(songsJSON);

  }
});
