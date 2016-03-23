
var songList=[];

function Song(data){
  this.image = data.image;
  this.songTitle = data.songTitle;
  this.songAuthor = data.songAuthor;
  this.songLength = data.songLength;
  this.songListened = data.songListened;
}

// for(i=0;i<lengthPlaylits;i++){
//   var lengthSongs=playlist[i].songs.length;
//     console.log(playlist[i]);
//   for(j=0;j<lengthSongs;j++){
//     songList[j]=new Song(playlist[i].songs[j]);
//     console.log(songList[i]);
//   }

Song.prototype.setImage = function(image){
  this.image = image;
};
Song.prototype.setTitle = function(title){
  this.songTitle = title;
};
Song.prototype.setAuthor = function(author){
  this.songAuthor = author;
};
Song.prototype.setSongLength = function(songLength){
  this.songLength = songLength;
};
Song.prototype.setListened = function(listened){
  this.songListened = listened;
};
Song.prototype.getImage = function(){
  return this.image;
};
Song.prototype.getTitle = function(){
  return this.songTitle;
};
Song.prototype.getAuthor = function(){
  return this.songAuthor;
};
Song.prototype.getSongLength = function(){
  return this.songLength;
};
Song.prototype.getListened = function(){
  return this.songListened;
};
