var list = JSON.parse(playlistsJSON);

function Song(data) {

  this.image = data.image;
  this.songTitle = data.songTitle;
  this.songAuthor = data.songAuthor;
  this.songLength = data.songLength;
  this.songListened = data.songListened;

}

Song.prototype.getImage = function () {

  return this.image ;
}

Song.prototype.getSongTitle = function () {

  return this.songTitle;
}

Song.prototype.getSongAuthor = function () {

  return this.songAuthor;
}

Song.prototype.getSongLength = function () {

  return this.songLength;
}

Song.prototype.getSongListened = function () {

  return this.songListened;
}

/*function Playlist() {

  this.name = title;
  this.songList = [];

}


Playlist.prototype.addSong = function (song) {
  this.songList.push(song);

} */
