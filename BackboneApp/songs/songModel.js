$(function(){
  var songs = [
                {
                  songImage: "xxx",
                  songTitle: "XXX",
                  songAuthor: "lorem ipsum",
                  songLength: 1,
                  songListened: 3
                },
                {
                  songImage: "xxx",
                  songTitle: "XXX",
                  songAuthor: "lorem ipsum",
                  songLength: 2,
                  songListened: 2
                },
                {
                  songImage: "xxx",
                  songTitle: "XXX",
                  songAuthor: "lorem ipsum",
                  songLength: 3,
                  songListened: 1
                }

              ];


var Song = Backbone.Model.extend({
  defaults: {
    songImage: "image",
    songTitle: "title",
    songAuthor: "author",
    songLength: null,
    songListened: null
  }

});
