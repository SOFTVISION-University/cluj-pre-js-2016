
function Playlist(objectPlaylist) {
 this.id = objectPlaylist.id;
 this.title = objectPlaylist.title;
 this.description = objectPlaylist.description;
 this.imageLarge = objectPlaylist.imageLarge;
 this.imageSmall = objectPlaylist.imageSmall;
 this.songs = this.getSongs(objectPlaylist);
}

Playlist.prototype.getSongs = function(objectPlaylist){

    var thisOfPlaylist = this;

    var mapFunction = function(val) {

        return thisOfPlaylist.createSong(val);
        };

    return objectPlaylist.songs.map(mapFunction);
};

Playlist.prototype.createSong = function(song){

  return new Song(song);
};

Playlist.prototype.addSong = function(newSong){
  this.songs.push(this.createSong(newSong));
};
