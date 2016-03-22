function goOnTop(){
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  document.getElementById("id").focus();
}

var playlistFromParse = JSON.parse(playlistsJSON);


function unhidePlaylist(){

    document.getElementById("playlist").style.visibility = "visible";
    console.log(JSON.parse);
    var currentPlaylist = new Playlist();

    for(var i = 0; i <= playlistFromParse[0].songs[i].length; i++){
      var song = new Song(playlistFromParse[0].songs[i]);
      console.log(songs);

      }
    }


function closePlaylist(){
    document.getElementById("playlist").style.visibility = "hidden";
}










function Song(){
  this.image = image;
  this.songTitle = songTitle;
  this.songAuthor = songAuthor;
  this.songLength = songLength;
  this.songListened = songListened;

};


/*function Playlist(){
  this.playlist = ;
  this.songsArray = songs[i];
}*/
