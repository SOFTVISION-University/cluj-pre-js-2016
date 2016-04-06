const SongModel = Backbone.Model.extend({
  defaults: {
    image: '',
    songAuthor: 'Metalica',
    songTitle: 'Rock on',
  },
});

export { SongModel };
