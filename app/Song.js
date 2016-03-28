
function Song(songTitle, songAuthor, songLength, songListened, img){
  this.songTitle = songTitle;
  this.songAuthor = songAuthor;
  this.songLength = songLength;
  this.songListened = songListened;
  this.img = img;
}

Song.prototype.setSongTitle = function(songTitle){
  this.songTitle = songTitle;
};

Song.prototype.getSongTitle = function(){
  return this.songTitle;
};

Song.prototype.setSongAuthor = function(songAuthor){
  this.songAuthor = songAuthor;
};

Song.prototype.getSongAuthor = function(){
  return this.songAuthor;
};

Song.prototype.setSongLength = function(songLength){
  this.songLength = songLength;
};

Song.prototype.getSongLength = function(){
  return this.songLength;
};

Song.prototype.setSongListened = function(songListened){
  this.songListened = songListened;
};

Song.prototype.getSongListened = function(){
  return this.songListened;
};

Song.prototype.setImg = function(img){
  this.img = img;
};

Song.prototype.getImg = function(){
  return this.img;
};
