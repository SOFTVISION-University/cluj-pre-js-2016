
function Playlist(){
  this.name=name;
  this.songList=[];
}

Playlist.prototype.addSong=function(s){
  this.songList.push(s)
}
