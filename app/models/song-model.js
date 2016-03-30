var zongs = [
  {
    title : "aaaaa",
    author : "author",
    imagePath : "../core/assets/beats-like-birds.png",
    length : "3:33",
    playCount : 4
  },
  {
    title : "titldde",
    author : "autaahor",
    imagePath : "../core/assets/beats-like-birds.png",
    length : "2:45",
    playCount : 023
  }
];
var SongModel = Backbone.Model.extend({
  defaults: {
    title : "title",
    author : "author",
    imagePath : "../core/assets/beats-like-birds.png",
    length : "length",
    playCount : 0
  }
});
