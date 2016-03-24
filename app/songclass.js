<<<<<<< HEAD
function Song(path){
  console.log("AAAA:",path.title, path.songTitle);
=======
var JSONparse=JSON.parse(playlistsJSON);//parsare piese si in functia Pop_Up


function Song(path){
>>>>>>> second_week
  this.image=path.image;
  this.title=path.songTitle;
  this.artist=path.songAuthor;
  this.length=path.songLength;
  this.listened=path.songListened;
<<<<<<< HEAD
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

Song.prototype.setSongTitle= function(title){

  this.title= title;
}

Song.prototype.setSongAuthor= function(artist){

  this.artist= artist;
}

Song.prototype.setSongLength= function(length){

  this.length=length;
}

Song.prototype.setSongListened= function(listened){

  this.listened=listened;
}

Song.prototype.setimage= function(image){

  this.image=image;
=======
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
>>>>>>> second_week
}
