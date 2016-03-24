function Song(data) {

  this.image = data.image ;
  this.songTitle = data.songTitle ;
  this.songAuthor = data.songAuthor ;
  this.songLength = data.songLength ;
  this.songListened = data.songListened ;

}

Song.prototype.getImage = function () {

  return this.image ;
};

Song.prototype.getSongTitle = function () {

  return this.songTitle ;
};

Song.prototype.getSongAuthor = function () {

  return this.songAuthor ;
};

Song.prototype.getSongLength = function () {

  return this.songLength ;
};

Song.prototype.getSongListened = function () {

  return this.songListened ;
};

Song.prototype.setImage = function ( image ) {

  this.image = image ;
};

Song.prototype.setSongTitle = function ( songTitle ) {

  this.songTitle = songTitle ;
};


Song.prototype.setSongAuthor = function ( songAuthor ) {

  this.songAuthor = songAuthor ;
};


Song.prototype.setSongLength = function ( songLength ) {

  this.songLength = songLength ;
};


Song.prototype.setSongListened = function ( songListened ) {

  this.songListened = songListened ;
};
