var playListFromJS= JSON.parse(playlistsJSON);


document.addEventListener("DOMContentLoaded", function(event) {

    createPlayLists();

  });

//function Create playlists
function createPlayLists(){
  console.log(playListFromJS);
  for (var i = 0; i < playListFromJS.length; i++) {
    var bigPlaylist = new Playlist(playListFromJS[i]);
    drawBigPlayList(bigPlaylist);
  }
}
// end function create playlists

//start draw and populate nodes --> playlist
function drawBigPlayList(playlist){

  var playlistDiv = document.getElementsByClassName('playListDivTemplate')[playlist.index];
  playlistDiv.style.backgroundImage = 'url("'+playlist.imageLarge+'")';
  playlistDiv.getElementsByTagName('span')[0] = playlist.playlistName;
  playlistDiv.getElementsByTagName('span')[1] = playlist.description;
}
//end draw and populate nodes

//start click explore playlist
function myFunction(playlistNr){
  var songsArray = [];
  var selectedPlaylist = playListFromJS[playlistNr];
  var playListObject = new Playlist(selectedPlaylist);
  var draw = new Draw();
  draw.beObserver(playListObject);

  drawPlayListHeader(playListObject);
  for (var i = 0; i < selectedPlaylist.songs.length; i++)
  {
      var song = new Song(selectedPlaylist.songs[i]);
      playListObject.addSong(song);
  }


}
//end click explore playlist

//start draw songs in the playlist
function drawPlayListHeader(playListObject) {

  console.log(playListObject);
  document.getElementById('playList').style.visibility = "visible";
  document.getElementById('playList').style.transition = "0.5s";
  document.getElementById('playList').style.height = "400px";

  var playlistImg = document.getElementById('playListHeader').getElementsByTagName('img')[0];
  console.log(playlistImg);
  playlistImg.style.float = "left";
  playlistImg.style.backgroundImage = 'url("'+playListObject.imageSmall+'")';
  var titleSpan = document.getElementById('playListHeader').getElementsByTagName('span')[0];
  titleSpan.innerText = playListObject.playlistName;
}


//end draw songs in the playlist


function convertToMin(nr)
{
  var min = Math.floor(nr / 60);
  var sec = nr % 60;

  if (sec < 10)
  {
    sec += "0";
  }
  var str = min + ":" + sec;
  return str;
}
