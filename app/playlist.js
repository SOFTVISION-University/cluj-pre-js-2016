function Playlist(path){
  this._id = path.id;
  this._title = path.title;
  this._songs = [];
  for(var i = 0; i < path.songs.length; i++){
    this._songs.push(new Song(path.songs[i]));
  }
  this._imageLarge = path.imageLarge;
  this._imageSmall = path.imageSmall;
  this._description = path.description;
  this.update = function(){
    console.log("Playlist updated!");
  }
}

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

Playlist.prototype.setPlayListId = function(id){
  this._image = id;
};

Playlist.prototype.setPlaylistTitle = function(title){
  this._title = title;
};

Playlist.prototype.setPlayListLarge = function(imageLarge){
  this._imageLarge = imageLarge;
};

Playlist.prototype.setPlayListSmall = function(imageSmall){
  this._imageSmall = imageSmall;
};

Playlist.prototype.setPlayListDescription = function(description){
  this._description = description;
};
