function Playlist(path){
  this._id = path.id;
  this._title = path.title;
  this._imageLarge = path.imageLarge;
  this._imageSmall = path.imageSmall;
  this._description = path.description;
  this._songs = [];
  var songObj = new Song(path);
  //replace for with map
  this._songs = path.songs.map(function(songObj){
    return songObj;
  });

}

Playlist.prototype.update = function(){
  console.log("Playlist updated!");
};

Playlist.prototype.getPlaylistId = function(){
  return this._id;
};

Playlist.prototype.getPlaylistTitle = function(){
  return this._title;
};

Playlist.prototype.getPlaylistSongs = function(){
  return this._songs;
};

Playlist.prototype.getPlaylistLarge = function(){
  return this._imageLarge;
};

Playlist.prototype.getPlaylistSmall = function(){
  return this._imageSmall;
};

Playlist.prototype.getPlaylistDescription = function(){
  return this._description;
};

Playlist.prototype.setPlaylistId = function(id){
  this._id = id;
};

Playlist.prototype.setPlaylistTitle = function(title){
  this._title = title;
};

Playlist.prototype.setPlaylistLarge = function(imageLarge){
  this._imageLarge = imageLarge;
};

Playlist.prototype.setPlaylistSmall = function(imageSmall){
  this._imageSmall = imageSmall;
};

Playlist.prototype.setPlaylistDescription = function(description){
  this._description = description;
};
