const PlaylistModel = Backbone.Model.extend({
  setSongs(songs) {
    this.songs = songs;
  },
});

export { PlaylistModel };
