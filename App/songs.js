var playlistFromParse = JSON.parse(playlistsJSON);
function buildDomain() {
   for( var i = 0; i < playlistFromParse.length; i++ ) {
      playlist.push( new Playlist(playlistFromParse[i]) );
   }

}

function Song(path){
  this.image = path.image;
  this.songTitle = path.songTitle;
  this.songAuthor = path.songAuthor;
  this.songLength = path.songLength;
  this.songListened = path.songListened;
}

  Song.prototype.getSongTitle = function(){
    return this.songTitle;
  }

  Song.prototype.getSongAuthor = function(){
    return this.songAuthor;
  }

  Song.prototype.getSongLength = function(){
    return this.songLength;

  }

  Song.prototype.getSongListened = function(){
    return this.songListened;
  }

  Song.prototype.getImage = function(){
    return this.image;
  }

  Song.prototype.setSongTitle = function(title){
    this.songTitle = name;
  }

  Song.prototype.setSongAuthor = function(author){
    this.songAuthor = author;
  }

  Song.prototype.setSongLength = function(length){
    this.songLength = length;
  }

  Song.prototype.setSongListened = function(listening){
    this.songListened = listening;
  }

  Song.prototype.setImage = function(songImage){
    this.image = songImage;
  }





  /*Song.prototype.playCount(){
    playCount = 0;
    for( var i=0; i<=songLength[0].songs[i].length; i++){
      playCount= songLength[i] + songLength[i+1];
    }
  }*/
