import { PlaylistCollectionView } from './Playlist/PlaylistCollectionView.js';
import { PlaylistsCollection } from './Playlist/playlistsCollection.js';
const viewPlaylists = $(function(){

  var playlistCollection = new PlaylistsCollection();
  playlistCollection.fetch()
  .done(() => {
    var playlistCollectionView = new PlaylistCollectionView({
      collection: playlistCollection,
      el: $('#playlistContent')
    });
    playlistCollectionView.render();
    $('#playlistContent').append(playlistCollectionView.el);
  })
});

export { viewPlaylists };
