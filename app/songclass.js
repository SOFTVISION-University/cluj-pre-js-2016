var JSONparse=JSON.parse(playlistsJSON);//parsare piese si in functia Pop_Up


function Song(path){
  this.image=path.image;
  this.title=path.songTitle;
  this.artist=path.songAuthor;
  this.length=path.songLength;
  this.listened=path.songListened;
  // console.log('obj', this);
  }

Song.prototype.getSongTitle= function(){

  return this.title ;
}

Song.prototype.getSongAuthor= function(){

  return this.artist;
}

Song.prototype.getSongLength= function(){

  return this.length;
}

Song.prototype.getSongListened= function(){

  return this.listened;
}

Song.prototype.getimage= function(){

  return this.image;
}
// 
// Song.prototype.setSongTitle= function(title){
//
//   this.title= title;
// }
//
// Song.prototype.setSongAuthor= function(artist){
//
//   this.artist= artist;
// }
//
// Song.prototype.setSongLength= function(length){
//
//   this.length=length;
// }
//
// Song.prototype.setSongListened= function(listened){
//
//   this.listened=listened;
// }
//
// Song.prototype.setimage= function(image){
//
//   this.image=image;
//   }
