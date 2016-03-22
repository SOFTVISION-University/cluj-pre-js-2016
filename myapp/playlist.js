var songJSON=JSON.parse(playlistsJSON);
var l=songJSON.length;

var playlist=[];
var songs=[];



function Playlist(data){
  this.id=data.id;
  this.title=data.title;
  this.songs=[];
  for(j=0;j<data.songs.length;j++)
  {
    var tempSong = new Song(data.songs[j]);
    this.songs.push(tempSong);
  }
}

for(i=0;i<l;i++){
  playlist[i]=new Playlist(songJSON[i]);
  // console.log(playlist[i]);
  // console.log(playlist[i].songs[0]);
}


function removePlaylist(){
  var parent = document.getElementById( 'plyL' );
  while ( document.getElementById('song') != null ){
    var child = document.getElementById( 'song' );
    parent.removeChild( child );
  }
}

var lengthSongs = songJSON[0].songs.length;
function displaySongs(){
    removePlaylist();
    var playlistElement = document.getElementById('plyL');

    for( j = 0 ; j < lengthSongs ; j++ ){

        var newdiv = document.createElement( 'div' );
        var divIdName = 'song';
        newdiv.setAttribute( 'id', divIdName );
        newdiv.style = "height:70px;vertical-align:top;border-bottom: 1px solid gray";

        var img = document.createElement('img');

        // var parag=document.createElement('p');
        // var pIdName='text';
        // parag.setAttribute('id',pIdName);
        // parag.style="display:inline-block;padding-left:5px ";
        newdiv.innerHTML = '<img src=' + playlist[0].songs[j].image + '/>' + playlist[0].songs[j].songTitle + "    " +" by " + playlist[0].songs[j].songAuthor + "      " + playlist[0].songs[j].songLength + "    " + playlist[0].songs[j].songListened;

        //newdiv.appendChild(parag);
        playlistElement.appendChild( newdiv );

    //  var img=new Image();
      // img.src= playlist[0].songs[j].image;
      // newdiv.appendChild('img');
     //newdiv.innerHTML='<img src=' + playlist[0].songs[j].image + '/>';
    // newdiv.innerHTML = playlist[0].songs[j].songLength;
    //  newdiv.innerHTML = playlist[0].songs[j].songListened;

    }

}
