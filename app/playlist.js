function Playlist(path){
  this.id = path.id;
  this.title = path.title;
  this.songs = [];
  for(var i = 0; i < path.songs.length; i++){
    this.songs.push(new Song(path.songs[i]));
  }
  this.imageLarge = path.imageLarge;
  this.imageSmall = path.imageSmall;
  this.description = path.description;
}

Playlist.prototype.getSong = function(){
  
}
