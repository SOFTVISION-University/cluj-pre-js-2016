function Factory () {

}

Factory.create = function ( type , data ) {

  if ( type == "Playlist" ) {

    return new Playlist ( data ) ;
  }

  if ( type == "Song" ) {

    return new Song ( data ) ;
  }

}
