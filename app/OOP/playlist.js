import { Song } from './OOP/song.js';
function Playlist(path) {
  this._id = path.id;
  this._title = path.title;
  this._imageLarge = path.imageLarge;
  this._imageSmall = path.imageSmall;
  this._description = path.description;
  this._songs = [];
  const songObj = new Song(path);
  // replace for with map
  this._songs = path.songs.map(() => {
    return songObj;
  });
}

Playlist.prototype.update = function update() {
};

Playlist.prototype.getPlaylistId = function getPlaylistId() {
  return this._id;
};

Playlist.prototype.getPlaylistTitle = function getPlaylistTitle() {
  return this._title;
};

Playlist.prototype.getPlaylistSongs = function getPlaylistSongs() {
  return this._songs;
};

Playlist.prototype.getPlaylistLarge = function getPlaylistLarge() {
  return this._imageLarge;
};

Playlist.prototype.getPlaylistSmall = function getPlaylistSmall() {
  return this._imageSmall;
};

Playlist.prototype.getPlaylistDescription = function getPlaylistDescription() {
  return this._description;
};

Playlist.prototype.setPlaylistId = function setPlaylistId(id) {
  this._id = id;
};

Playlist.prototype.setPlaylistTitle = function setPlaylistTitle(title) {
  this._title = title;
};

Playlist.prototype.setPlaylistLarge = function setPlaylistLarge(imageLarge) {
  this._imageLarge = imageLarge;
};

Playlist.prototype.setPlaylistSmall = function setPlaylistSmall(imageSmall) {
  this._imageSmall = imageSmall;
};

Playlist.prototype.setPlaylistDescription = function setPlaylistDescription(description) {
  this._description = description;
};
