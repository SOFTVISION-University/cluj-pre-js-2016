const SongModel = Backbone.Model.extend({
  defaults: {
    title: 'title',
    author: 'author',
    image: '../core/assets/beats-like-birds.png',
    length: 'length',
    playCount: 0,
  },
});

export { SongModel };
