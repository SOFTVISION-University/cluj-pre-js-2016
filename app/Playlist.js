var playlistArray = JSON.parse(playlistsJSON);

function Playlist(id, title, imgSmall, imgBig, songs, description){
  this.id = id;
  this.title = title;
  this.imgSmall = imgSmall;
  this.imgBig = imgBig;
  this.songs = songs;
  this.description = description;
}

Playlist.prototype.setId = function(id){
  this.id = id;
};

Playlist.prototype.getId = function(){
  return this.id;
};

Playlist.prototype.setTitle = function(title){
  this.title = title;
};

Playlist.prototype.getTitle = function(){
  return this.title;
};

Playlist.prototype.setImgSmall = function(imgSmall){
  this.imgSmall = imgSmall;
};

Playlist.prototype.getImgSmall = function(){
  return this.imgSmall;
};

Playlist.prototype.setImgBig = function(imgBig){
  this.imgBig = imgBig;
};

Playlist.prototype.getImgBig = function(){
  return this.imgBig;
};

Playlist.prototype.setSongs = function(songs){
  this.songs = songs;
};

Playlist.prototype.getSongs = function(){
  return this.songs;
};

Playlist.prototype.setDescription = function(description){
  this.description = description;
};

Playlist.prototype.getDescription = function(){
  return this.description;
};

var collectionPlaylistObjects = playlistArray.map(function(obj){
  return new Playlist(obj.id, obj.title, obj.imageSmall, obj.imageLarge, obj.songs, obj.description);
});
