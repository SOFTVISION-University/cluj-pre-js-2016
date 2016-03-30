var SongCollection = Backbone.Collection.extend({
  model: SongModel
});

var songcol = new SongCollection();
songcol.set(zongs);
