var list = JSON.parse( playlistsJSON ) ;

var i;

function createPlaylist ( ) {

    var currentPlaylist = new Playlist( list[0] ) ;

    var newDiv = document.createElement ( 'div' ) ;

    newDiv.id = 'new' ;

    newDiv.style.height = "200px" ;

    newDiv.style.width = "200px" ;

    newDiv.style.backgroundColor = "blue" ;

    document.getElementById('new').appendChild('newDiv') ;

    var currentPlaylistsongs = currentPlaylist.songs.map ( function ( data ) {

      return new Song ( data.image , data.songTitle , data.songAuthor , data.songAuthor , data.songListened) ;

    });

    for ( i = 0 ; i < currentPlaylistsongs.length ; i++ ) {

      var song = currentPlaylistsongs[i] ;

      var image = document.createElement('div');
  		image.innerHTML = '<img src="' + song.getImage() + '"/>';
  		innerDiv.appendChild(image);

      var songTitle = document.createElement('div');
  		songTitle.innerText = song.getSongTitle();
  		innerDiv.appendChild(songTitle);

      var songAuthor = document.createElement('div');
  		songAuthor.innerText = song.getSongAuthor();
  		innerDiv.appendChild(songAuthor);

  		var songLength = document.createElement('div');
  		songLength.innerText = convertSecToMin(song.getSongLength());
  		innerDiv.appendChild(songLength);

  		var songListened = document.createElement('div');
  		songListened.innerText = song.getSongListened();
  		innerDiv.appendChild(songListened);
    }

}
