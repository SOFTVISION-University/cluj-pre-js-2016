var parsedPlaylist = JSON.parse(playlistsJSON);
var l = parsedPlaylist.length;

var playlist = [];
var songs = [];



function Playlist(data){
  this.id = data.id;
  this.title = data.title;
  this.songs = [];
  for( j = 0; j < data.songs.length; j++)
  {
    var tempSong = new Song(data.songs[j]);
    this.songs.push(tempSong);
  }
}


for(i = 0; i < l; i++){
  playlist[i] = new Playlist(parsedPlaylist[i]);
}


Playlist.prototype.setId = function (id){
    this.id = id;
};
Playlist.prototype.setTitle = function (title){
    this.title = title;
};
Playlist.prototype.setSongs = function (songs){
    this.songs = songs;
};

Playlist.prototype.getId = function (){
    return this.id;
};
Playlist.prototype.getTitle = function (){
    return this.title;
};
Playlist.prototype.getSongs = function (){
    return this.songs;
};


function removePlaylist(){
  var parent = document.getElementById( 'plyL' );
  while ( document.getElementById('divSong') !== null ){
    var child = document.getElementById( 'divSong' );
    parent.removeChild( child );
  }
}


function displaySongs(){
    removePlaylist();
    var lengthPlaylist = playlist[0].songs.length;
    var playlistElement = document.getElementById('plyL');

    for( j = 0 ; j < lengthPlaylist ; j++ ){

        var divSong = document.createElement( 'div' );
        var divIdName = 'divSong';
        divSong.setAttribute( 'id', divIdName );
        divSong.style = "height:70px;vertical-align:top;border-bottom: 1px solid gray";

        var img = document.createElement('img');

        // var parag=document.createElement('p');
        // var pIdName='text';
        // parag.setAttribute('id',pIdName);
        // parag.style="display:inline-block;padding-left:5px ";
        divSong.innerHTML = '<img src= "' + playlist[0].songs[j].image + '"/>' + playlist[0].songs[j].songTitle + "    " +" by " + playlist[0].songs[j].songAuthor + "      " + playlist[0].songs[j].songLength + "    " + playlist[0].songs[j].songListened;

        //newdiv.appendChild(parag);
        playlistElement.appendChild( divSong );

    //  var img=new Image();
      // img.src= playlist[0].songs[j].image;
      // newdiv.appendChild('img');
     //newdiv.innerHTML='<img src=' + playlist[0].songs[j].image + '/>';
    // newdiv.innerHTML = playlist[0].songs[j].songLength;
    //  newdiv.innerHTML = playlist[0].songs[j].songListened;

    }

}
