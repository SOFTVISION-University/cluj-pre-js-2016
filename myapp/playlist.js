var parsedPlaylist = JSON.parse(playlistsJSON);
var nrOfPlaylists = parsedPlaylist.length;


function Playlist(data){
  this.id = data.id;
  this.title = data.title;
  this.songs = [];
  this.songs = data.songs.map(function(val){
      return new Song(val);
  });
  // for( j = 0; j < data.songs.length; j++)
  // {
  //   var tempSong = new Song(data.songs[j]);
  //   this.songs.push(tempSong);
  // }
}

var playlist=parsedPlaylist.map(function(val){
    return new Playlist(val);
});


Playlist.prototype.setId = function (id){
    this.id = id;
};
Playlist.prototype.setTitle = function (title){
    this.title = title;
};
Playlist.prototype.setSongs = function (songs){
    this.songs = songs;
};

Playlist.prototype.getId = function (){
    return this.id;
};
Playlist.prototype.getTitle = function (){
    return this.title;
};
Playlist.prototype.getSongs = function (){
    return this.songs;
};
