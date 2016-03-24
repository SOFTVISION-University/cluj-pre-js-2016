function Song(data){
  this.image = data.image;
  this.songName = data.songTitle;
  this.artistName = data.songAuthor;
  this.duration = data.songLength;
  this.count = data.songListened;
}
//getters
Song.prototype.getSongImage = function(){
  return this.image;
};
Song.prototype.getSongTitle = function(){
  return this.songName;
};
Song.prototype.getSongAuthor = function(){
  return this.artistName;
};
Song.prototype.getSongDuration = function(){
  return this.duration;
};
Song.prototype.getSongCount = function(){
  return this.count;
};
//setters
Song.prototype.setSongImage = function(image){
  this.image = image;
};
Song.prototype.setSongTitle = function(title){
  this.songName = title;
};
Song.prototype.setSongAuthor = function(author){
  this.artistName = author;
};
Song.prototype.setSongDuration = function(duration){
  this.duration = duration;
};
Song.prototype.setSongCount = function(count){
  this.count = count;
};
