function Song(songTitle, songAuthor, songLength, songListened){
  this.songTitle = songTitle;
  this.songAuthor = songAuthor;
  this.songLength = songLength;
  this.songListened = songListened;
}

Song.prototype.setSongTitle = function(songTitle){
  this.songTitle = songTitle;
}

Song.prototype.getSongTitle = function(){
  return this.songTitle;
}

Song.prototype.setSongAuthor = function(songAuthor){
  this.songAuthor = songAuthor;
}

Song.prototype.getSongAuthor = function(){
  return this.songAuthor
}

Song.prototype.setSongLength = function(songLength){
  this.songLength = songLength;
}

Song.prototype.getSongLength = function(){
  return this.songLength;
}

Song.prototype.setSongListened = function(songListened){
  this.songListened = songListened;
}

Song.prototype.getSongListened = function(){
  return this.songListened;
}
