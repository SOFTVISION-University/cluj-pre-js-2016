var JSONparse=JSON.parse(playlistsJSON);//parsare piese si in functia Pop_Up


function Song(path){
  this.image=path.image;
  this.title=path.songTitle;
  this.artist=path.songAuthor;
  this.length=path.songLength;
  this.listened=path.songListened;
  }

Song.prototype.getSongTitle(){

  return this.songTitle;
}

Song.prototype.getSongAuthor(){

  return this.songAuthor;
}

Song.prototype.getSongLength(){

  return this.songLength;
}

Song.prototype.getSongListened(){

  return this.songListened;
}

Song.prototype.getSongImage(){

  return this.songimage;
}
