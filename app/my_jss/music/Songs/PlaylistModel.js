const PlaylistModel = Backbone.Model.extend({
  defaults: {
    imageSmall: 'IMAGE SRC',
    title: 'Playlist 1',
    songs: undefined,
  },
});

export { PlaylistModel };
