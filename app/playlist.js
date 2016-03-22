
function Login(){
window.location.href="account_signin.html";
}

var playlists = JSON.parse(playlistsJSON);

function Pop_Up(){
document.getElementById('play').style.transition= "all 0.5s";
document.getElementById('play').style.visibility= "visible";
document.getElementById('play').style.height = "500px";


//console.log(JSONparse); //parsare si afisare pe consola
//console.log(usersJSON);}
var currentPlaylist= new Playlist(); //creare playlistul meu curent

for (var i = 0; i < playlists[0].songs.length; i++) {
  var song = new Song(playlists[0].songs[i]);
  currentPlaylist.addSong(song);
  console.log(currentPlaylist.songList);
}

functia Sign_up_free{
  

}
