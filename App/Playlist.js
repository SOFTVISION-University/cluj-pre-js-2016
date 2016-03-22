function Playlist(data) {
  this.index = data.id;
  this.playlistName = data.title;
  this.imageLarge = data.imageLarge;
  this.imageSmall = data.imageSmall;
  this.description = data.description;
  this.songsList = [];
  this.observers = [];
}
Playlist.prototype.setName = function(name){
  this.playlistName = name;
};
Playlist.prototype.addSong = function(song){
    this.songsList.push(song);
    this.notify(song);
};
Playlist.prototype.addObserver = function(observer) {
  this.observers.push(observer);
};
Playlist.prototype.notify = function(song){
  for(var i = 0; i < this.observers.length; i++)
    {
      this.observers[i].drawUpdate(song);
    }
};
//getters
Playlist.prototype.getPlaylistName = function(){
  return this.playlistName;
}
Playlist.prototype.getPlaylistImageSmall = function(){
  return this.imageSmall;
};
Playlist.prototype.getPlaylistImageLarge = function(){
  return this.imageLarge;
};
Playlist.prototype.getPlaylistDescription = function(){
  return this.description;
};
Playlist.prototype.getPlaylistSongslist = function(){
  return this.songsList;
};
//setters
Playlist.prototype.setPlaylistName = function(name){
   this.playlistName = name;
};
Playlist.prototype.setPlaylistImageSmall = function(imageSmall){
   this.imageSmall = imageSmall;
};
Playlist.prototype.setPlaylistImageLarge = function(imageLarge){
   this.imageLarge = imageLarge;
};
Playlist.prototype.setPlaylistDescription = function(description){
   this.description = description;
};
Playlist.prototype.setPlaylistSongslist = function(songsList){
   this.songsList = songsList;
};
