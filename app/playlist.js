function Playlist (item) {

  this.id = item.id ;

  this.title = item.title ;

  this.songs = this.getSongs( item ) ;

  }





Playlist.prototype.getId = function () {

  return this.id ;
};

Playlist.prototype.getTitle = function () {

  return this.title ;
};

Playlist.prototype.getSongs = function ( item ) {

  var localSongs = [];

  for (var i = 0 ; i < item.songs.length ; i++ ) {

    localSongs.push( new Song ( item.songs[i] ) ) ;
  }

  return localSongs ;
};

Playlist.prototype.getImageLarge = function () {

  return this.imageLarge ;
};

Playlist.prototype.getImageSmall = function () {

  return this.imageSmall ;
};

Playlist.prototype.getDescription = function () {

  return this.description ;
};

Playlist.prototype.setId = function ( id ) {

  this.id = id ;
};

Playlist.prototype.setTitle = function ( title ) {

   this.title = title ;
};

Playlist.prototype.setSongs = function ( songs ) {

   this.songs = songs ;
};

Playlist.prototype.setImageLarge = function ( imageLarge ) {

   this.imageLarge = imageLarge ;
};

Playlist.prototype.setImageSmall = function ( imageSmall ) {

   this.imageSmall = imageSmall ;
};

Playlist.prototype.setDescription = function ( description ) {

   this.description = description ;
};
