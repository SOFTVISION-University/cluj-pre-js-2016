const Song = Backbone.Model.extend({
  defaults: {
    image: 'user1',
    songAuthor: 'Autor1',
    songLength: 123,
  },
});

export { Song };
