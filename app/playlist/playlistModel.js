var Playlist = Backbone.Model.extend({
  defaults: {
    id : 0,
    title : 'default title',
    imgSmall : 'default url-img-small',
    imgBig : 'default url-img-big',
    description : 'default description of the playlist'
  }
});

var Playlists = Backbone.Collection.extend({
  model: Playlist
});
