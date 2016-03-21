var lengthPlaylits=playlist.length;
var songList=[];

function Song(data){
  this.image=data.image;
  this.songTitle=data.songTitle;
  this.songAuthor=data.songAuthor;
  this.songLength=data.songLength;
  this.songListened=data.songListened;
}

// for(i=0;i<lengthPlaylits;i++){
//   var lengthSongs=playlist[i].songs.length;
//     console.log(playlist[i]);
//   for(j=0;j<lengthSongs;j++){
//     songList[j]=new Song(playlist[i].songs[j]);
//     console.log(songList[i]);
//   }
