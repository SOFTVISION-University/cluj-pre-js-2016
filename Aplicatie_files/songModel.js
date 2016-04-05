var SongModel = Backbone.Model.extend({
  defaults: {
    songImage: "image",
    songTitle: "title",
    songAuthor: "author",
    songLength: null,
    songListened: null
  }
});
