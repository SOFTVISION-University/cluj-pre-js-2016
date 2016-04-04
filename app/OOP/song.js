function Song(path) {
  this._image = path.image;
  this._songTitle = path.songTitle;
  this._songAuthor = path.songAuthor;
  this._songLength = path.songLength;
  this._songListened = path.songListened;
  this._observers = [];
}

Song.prototype.attach = function attach(observer) {
  this._observers.push(observer);
};

Song.prototype.notify = function notify() {
  for (let i = 0; i < this._observers.length; i++) {
    this._observers[i].update();
  }
};

Song.prototype.getSongImage = function getSongImage() {
  return this._image;
};

Song.prototype.getSongTitle = function getSongTitle() {
  this.notify();
  return this._songTitle;
};

Song.prototype.getSongAuthor = function getSongAuthor() {
  return this._songAuthor;
};

Song.prototype.getSongLength = function getSongLength() {
  return this._songLength;
};

Song.prototype.getSongListened = function getSongListened() {
  return this._songListened;
};

Song.prototype.setSongImage = function setSongImage(image) {
  this._image = image;
};

Song.prototype.setSongTitle = function setSongTitle(songTitle) {
  this._songTitle = songTitle;
};

Song.prototype.setSongAuthor = function setSongAuthor(songAuthor) {
  this._songAuthor = songAuthor;
};

Song.prototype.setSongLength = function setSongLength(songLength) {
  this._songLength = songLength;
};

Song.prototype.setSongListened = function setSongListened(songListened) {
  this._songListened = songListened;
};

export { Song };
