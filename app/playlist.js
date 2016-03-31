function Playlist(item) {
  this.id = item.id;
  this.title = item.title;
  this.image = item.image;
  this.songs = item.songs;
  this.imageLarge = item.imageLarge;
  this.imageSmall = item.imageSmall;
  this.description = item.description;
}

Playlist.prototype.getId = function getId() {
  return this.id;
};
Playlist.prototype.getTitle = function getTitle() {
  return this.title;
};
Playlist.prototype.getSongs = function getSongs() {
  return this.songs;
};
Playlist.prototype.getImageLarge = function getImageLarge() {
  return this.imageLarge;
};
Playlist.prototype.getImageSmall = function getImageSmall() {
  return this.imageSmall;
};
Playlist.prototype.getDescription = function getDescription() {
  return this.description;
};
Playlist.prototype.setId = function setId(id) {
  this.id = id;
};
Playlist.prototype.setTitle = function setTitle(title) {
  this.title = title;
};
Playlist.prototype.setSongs = function setSongs(songs) {
  this.songs = songs;
};
Playlist.prototype.setImageLarge = function setImageLarge(imageLarge) {
  this.imageLarge = imageLarge;
};
Playlist.prototype.setImageSmall = function setImageSmall(imageSmall) {
  this.imageSmall = imageSmall;
};
Playlist.prototype.setDescription = function setDescription(description) {
  this.description = description;
};
