function Song(data) {
  this.image = data.image;
  this.songTitle = data.songTitle;
  this.songAuthor = data.songAuthor;
  this.songLength = data.songLength;
  this.songListened = data.songListened;


}
Song.prototype.getImage = function() {
  return this.image;

};
Song.prototype.getTitle = function() {
	return this.songTitle;

};
Song.prototype.getLength = function() {
	return this.songLength;

};
Song.prototype.getAuthor = function() {
	return this.songAuthor;

};
Song.prototype.getListened = function() {
	return this.songListened;

};
Song.prototype.setListened = function(Listened) {
	this.songListened = Listened ;

};
Song.prototype.setImage = function(image) {
	this.image = image;
};
Song.prototype.setTitle = function(title) {
	this.songTitle = title;
};
Song.prototype.setLength = function(length) {
	this.songLength = length;
};
Song.prototype.setAuthor = function(author) {
	this.songAuthor = author;
};
