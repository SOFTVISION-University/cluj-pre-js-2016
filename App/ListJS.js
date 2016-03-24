var playListFromJS= JSON.parse(playlistsJSON);
// console.log("PList:"+playListFromJS[0]);


document.addEventListener("DOMContentLoaded", function(event) {


  if( AccountService._instance.loggedUser !== null)
  {
      console.log("USER logged",  AccountService._instance.loggedUser);
      document.getElementById('signInButton').style.visibility =  "hidden";
      document.getElementById('logOutButton').style.visibility =  "visible";
      document.getElementById('username').innerText ="Hello " + AccountService._instance.loggedUser.name + " !" ;
  }
  else {
      console.log("USER NOT logged");
      document.getElementById('logOutButton').style.visibility =  "hidden";
      document.getElementById('username').innerText = "";
  }

    // /createPlayLists();

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

function clearPlaylist(){
  var parentDiv = document.getElementById('songsHolder');
  var songDivArray = parentDiv.getElementsByClassName('divToClone');
  console.log(songDivArray.length);
  console.log(songDivArray);
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
  console.log();
  // playlistDiv.getElementsByTagName('button')[0].setAttribute("onclick", "showPlaylist("+playlist.index+")");
}
//end draw and populate nodes

function closePlaylist(){
  document.getElementById('playList').style.visibility = "hidden";
  document.getElementById('playList').style.transition = "0.5s";
  document.getElementById('playList').style.height = "0px";
}

//start click explore playlist
function showPlaylist(playlistNr){
  var songsArray = [];
  var selectedPlaylist = playListFromJS[playlistNr];
  var playListObject = new Playlist(selectedPlaylist);
  // console.log("plObj:"+playListObject);
  var playlistView = new PlaylistView();
  playListObject.register(playlistView);

  clearPlaylist();

  drawPlayListHeader(playListObject);

//bad practice because addSongs will not be used at all..just wanna try map function...
  var addSongs = selectedPlaylist.songs.map(function(currentSong){
    // console.log(currentSong);
    var song = new Song(currentSong);
    playListObject.addSong(song);
    return song;
  });
  // console.log("addsongs:"+addSongs);

}
//end click explore playlist

//start draw songs in the playlist
function drawPlayListHeader(playListObject) {

  // console.log(playListObject);
  document.getElementById('playList').style.visibility = "visible";
  document.getElementById('playList').style.transition = "0.5s";
  document.getElementById('playList').style.height = "400px";

  var playlistImg = document.getElementById('playListHeader').getElementsByTagName('img')[0];
  // console.log(playlistImg);
  playlistImg.style.float = "left";
  playlistImg.style.backgroundImage = 'url("'+playListObject.imageSmall+'")';
  var titleSpan = document.getElementById('playListHeader').getElementsByTagName('span')[0];
  titleSpan.innerText = playListObject.playlistName;
}
//end draw songs in the playlist
