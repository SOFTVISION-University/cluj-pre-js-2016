function Playlist(path){
//  console.log("ceva"+path);
  this.id=path.id;
  this.name=path.title;
  this.songList=[];

  for(var i=0; i< path.songs.length; i++){
  console.log('11111', path.songs[i]);
      this.songList.push((new Song(path.songs[i])));

  }
  }

Playlist.prototype.getId = function(){
  return this.id;
}

Playlist.prototype.getPlaylistName = function(){
  return this.name;
}

Playlist.prototype.getlistSongs = function(index){
  return this.songList[index];
}

Playlist.prototype.setId = function(id){
  this.id=id;
}

Playlist.prototype.setPlaylistName = function(name){
  this.name=name;
}

Playlist.prototype.setlistSongs = function(index, songList){
  this.songList[index]=songList;}
