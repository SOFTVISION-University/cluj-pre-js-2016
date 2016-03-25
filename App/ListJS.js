var playListFromJS= JSON.parse(playlistsJSON);

document.addEventListener("DOMContentLoaded", function(event) {


  if( AccountService.getInstance().loggedUser !== null){
      document.getElementById('signInButton').style.visibility =  "hidden";
      document.getElementById('logOutButton').style.visibility =  "visible";
      document.getElementById('username').innerText ="Hello " + AccountService.getInstance().loggedUser.name + " !" ;
  }
  else {
      document.getElementById('logOutButton').style.visibility =  "hidden";
      document.getElementById('username').innerText = "";
  }
});

//function Create playlists
function createPlayLists(){

  (playListFromJS.map(createPlaylists)).map(drawBigPlayList);
}

function createPlaylists(playListFromJson){
  var bigPlaylist = new Playlist(playListFromJson);
}
// end function create playlists

function clearPlaylist(){
  var parentDiv = document.getElementById('songsHolder');
  var songDivArray = parentDiv.getElementsByClassName('divToClone');
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
}

//start draw and populate nodes --> playlist
function drawBigPlayList(playlist){
  var playlistDiv = document.getElementsByClassName('playListDivTemplate')[playlist.index];
  playlistDiv.style.backgroundImage = 'url("'+playlist.imageLarge+'")';
  playlistDiv.getElementsByTagName('span')[0] = playlist.playlistName;
  playlistDiv.getElementsByTagName('span')[1] = playlist.description;
}
//end draw and populate nodes

function closePlaylist(){
  var platListDiv =   document.getElementById('playList');
  platListDiv.className = "closePlayList";
  platListDiv.style.visibility = "hidden";
  platListDiv.style.transition = "0.5s";
  platListDiv.style.height = "0px";
}

//start click explore playlist
function showPlaylist(playlistNr){
  var songsArray = [];
  var selectedPlaylist = playListFromJS[playlistNr];
  var playListObject = new Playlist(selectedPlaylist);
  var playlistView = new PlaylistView();
  playListObject.register(playlistView);

  clearPlaylist();

  drawPlayListHeader(playListObject);

//bad practice because addSongs will not be used at all..just wanna try map function...
  var addSongs = selectedPlaylist.songs.map(function(currentSong){
    var song = new Song(currentSong);
    playListObject.addSong(song);
    return song;
  });

}
//end click explore playlist

//start draw songs in the playlist
function drawPlayListHeader(playListObject) {
  var platListDiv =   document.getElementById('playList');
  platListDiv.className = "showPlayList";
  platListDiv.style.visibility = "visible";
  platListDiv.style.transition = "0.5s";
  platListDiv.style.height = "400px";

  var playlistImg = document.getElementById('playListHeader').getElementsByTagName('img')[0];
  playlistImg.style.float = "left";
  playlistImg.style.backgroundImage = 'url("'+playListObject.imageSmall+'")';
  var titleSpan = document.getElementById('playListHeader').getElementsByTagName('span')[0];
  titleSpan.innerText = playListObject.playlistName;
}
//end draw songs in the playlist
