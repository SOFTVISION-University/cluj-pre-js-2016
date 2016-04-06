const PlayListModel = Backbone.Model.extend({
  defaults: {
    id: 1,
    title: '',
    description: '',
    imageLarge: '',
    imageSmall: '',
  },
  setSongs(songs) {
    this.songs= songs;
  },
});

export { PlayListModel };
