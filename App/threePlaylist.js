

function Playlist(path){
  this.id = path.id;
  this.title = path.title;
  for(var i = 0; i < path.songs.length; i++){
    this.songs.push(new Song(path.songs[i]));
  }
}

Playlist.prototype.getId = function(){
  return this.id;
}

Playlist.prototype.getTitle = function(){
  return this.title;
}

Playlist.prototype.getSongs = function(index){
  return this.song[index];
}

Playlist.prototype.setId = function(id){
  this.id = id;
}

Playlist.prototype.setTitle = function(title){
  this.title = title;
}

Playlist.prototype.setSongs = function(index, songs){
  this.songs[index] = songs;
}
