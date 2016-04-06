// import { SongModel } from './../Songs/modelSong.js';
// import { SongsItem } from './../Songs/collectionSong.js';
const PlaylistModel = Backbone.Model.extend({
  defaults: {
    title: 'Playlist',
    imageLarge: '',
  },
  setSongs(songs) {
    this.songs = songs;
  },
  // doSomething(attributes) {
  //   if (attributes.songs && attributes.songs.length > 0) {
  //     const songM = attributes.songs.map(function(songList) {
  //       return new SongModel(songList);
  //     });
  //     this.set('songs', new SongsItem(songM));
  //   }
  // },
});

export { PlaylistModel };
