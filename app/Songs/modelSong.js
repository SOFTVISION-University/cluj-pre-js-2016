const SongModel = Backbone.Model.extend({
  defaults: {
    songTitle: '',
    songAuthor: '',
    songLength: '',
  },
});

export { SongModel };
