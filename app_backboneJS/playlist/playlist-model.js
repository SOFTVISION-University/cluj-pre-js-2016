
const Playlist = Backbone.Model.extend({
  defaults: {
    id: 0,
    title: 'test',
    imageLarge: '',
    imageSmall: '',
    description: 'Lorem ipsum',
  },
  setSongs(songs) {
    this.songs = songs;
  },
});

export { Playlist };
