const PlaylistModel = Backbone.Model.extend({
  defaults: {
    id: +new Date(),
    title: 'cosmin',
    songs: [],
    description: 'daaa',
    imageLarge: '../core/assets/2015-best-music.png',
    imageSmall: '../core/assets/2015-best-music.png',
  },

});
export { PlaylistModel } ;
