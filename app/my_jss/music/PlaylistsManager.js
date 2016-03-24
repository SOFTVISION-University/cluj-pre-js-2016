var playListsData = new DataController();
// playlistsJSON is comming from playlist.js file;
playListsData.setUrlLocation(playlistsJSON);
playListsData.setSaveName("playlists");


function PlaylistsManager() {
    this.allPlaylists = this.getPlaylists();
}
// get playlist from external data
PlaylistsManager.prototype.getPlaylists = function(){

    var playListArray = playListsData.returnData();
    var thisOfPlaylistManager = this;

    var mapFunction = function(val) {
          return thisOfPlaylistManager.createPlaylist(val);
          };

  return playListArray.map(mapFunction);
};

/// create new playlist
PlaylistsManager.prototype.createPlaylist = function(playlist){

    return new Playlist(playlist);
};
PlaylistsManager.prototype.addPlaylist = function(newPlaylist){

  this.allPlaylists.push(this.createPlaylist(newPlaylist));

};

var playlistsManager = new PlaylistsManager();
