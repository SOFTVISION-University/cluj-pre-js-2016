var list = JSON.parse( playlistsJSON ) ;

function Pop_Up () {

  document.getElementById('popup').style.transition = "all 0.5s" ;
  document.getElementById('popup').style.visibility = "visibile" ;
  document.getElementById('popup').style.height = "500px" ;
}

var currentPlaylist = new Playlist( list[0] ) ;


var iDiv = document.createElement( 'div' ) ;

iDiv.id = 'content' ;

iDiv.style.width = "300px" ;

iDiv.style.height = "300px" ;

iDiv.style.backgroundColor = "blue" ;

document.getElementById( 'popup' ).appendChild( iDiv ) ;


for ( var i = 0 ; i < list[0].songs.length ; i++ ) {

  var song = new Song( list[0].songs[i] ) ;

}


for ( i = 0 ; i < currentPlaylist.songs.length ; i++ ) {

  var contentDiv = document.createElement( 'div' ) ;

  contentDiv.id = 'div-song' ;

  contentDiv.style.width = "300px" ;

  contentDiv.style.height = "300px" ;

  contentDiv.style.backgroundColor = "black" ;

  iDiv.appendChild ( contentDiv ) ;

  var song = currentPlaylist.songs[i] ;

  var title = document.createElement(' head' ) ;

  title.innerText = song.getSongTitle() ;

  contentDiv.appendChild ( title ) ;
}
