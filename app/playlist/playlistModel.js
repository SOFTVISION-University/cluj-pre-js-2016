var Playlist1 = Backbone.Model.extend({
  defaults: {
    id: +new Date(),
    title:"cosmin",
    songs: [],
    description : "daaa",
    imageLarge : "../core/assets/2015-best-music.png",
    imageSmall :"../core/assets/2015-best-music.png"
  },
  setSongs: function(songsJSON) {
    this.songs = new Songs(songsJSON);
  }
});
