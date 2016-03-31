function Song(data) {
  this.image = data.image;
  this.songTitle = data.songTitle;
  this.songAuthor = data.songAuthor;
  this.songLength = data.songLength;
  this.songListened = data.songListened;
}

Song.prototype.getImage = function getImage() {
  return this.image;
};
Song.prototype.getSongTitle = function getSongTitle() {
  return this.songTitle;
};
Song.prototype.getSongAuthor = function getSongAuthor() {
  return this.songAuthor;
};
Song.prototype.getSongLength = function getSongLength() {
  return this.songLength;
};
Song.prototype.getSongListened = function getSongListened() {
  return this.songListened;
};
Song.prototype.setImage = function setImage(image) {
  this.image = image;
};
Song.prototype.setSongTitle = function setSongTitle(songTitle) {
  this.songTitle = songTitle;
};
Song.prototype.setSongAuthor = function setSongAuthor(songAuthor) {
  this.songAuthor = songAuthor;
};
Song.prototype.setSongLength = function setSongLength(songLength) {
  this.songLength = songLength;
};
Song.prototype.setSongListened = function setSongListened(songListened) {
  this.songListened = songListened;
};
