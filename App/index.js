function unhidePlaylist(id){
    wantedId = null;
    Playlist[0].wantedId = 0;
    Playlist[1].wantedId = 1;
    Playlist[2].wantedId = 2;
    var selectedPlaylist = null;
    for(var i = 0; i <= Playlist.length; i++){
      if(Playlist[i].id == wantedId){
        selectedPlaylist = Playlist[i];
      }
    }
    var playlistSongs= selectedPlaylist.getSongs();
    for
    document.getElementById("playlist").style.visibility = "visible";

    /*var currentPlaylist = new Playlist();*/


}function closePlaylist(){
    document.getElementById("playlist").style.visibility = "hidden";
}
