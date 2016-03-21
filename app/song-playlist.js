var list = JSON.parse(playlistsJSON);

function Song(data) {

  this.image = data.image;
  this.Title = data.songTitle;
  this.Author = data.songAuthor;
  this.Length = data.songLength;
  this.Listened = data.songListened;

}

function Playlist() {

  this.name = title;
  this.songList = [];

}


Playlist.prototype.addSong = function (song) {
  this.songList.push(song);

}
