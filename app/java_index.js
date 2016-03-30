

var obj_accountService = JSON.parse(localStorage.getItem('testObject'));
var search  ;

function clonare(pop) {//onclick event
  Clear_playlist();//clear songs in playlist
  openPlaylist();


}
function OnLoad(obj) { //on load event
  control_user();
  Update_playlist();
  Populate();
  Search_music();

  request_from_server();


}
function logOut() {

  localStorage.removeItem('testObject');
  window.location.href = "index.html";
}

function openPlaylist() {

  var x = document.getElementById("pop_playlist1");
  x.style.transition = "0.5s";
  x.style.height = "800px";

}

function control_user() {
  if (obj_accountService ) {
      document.getElementById("button_signin").className = "hidden_button ";
      document.getElementById("log_out").style.display = "inline";

  }
  else{
     document.getElementById("log_out").style.display = "none";
  }

}

function Search(e) { //search event on key pressed
  if (e.keyCode  ==  13)	{
    var values  =  document.getElementById("search").value;
    search.SearchByValue(values,playlist_1);
    return false;
  }

}



function Update_playlist() {


  var playlists = new PlaylistsCollection();
  playlists.fetch().done(function(){
    var playlist = new PlaylistsView({
      el: document.getElementById('playlist1'),
      collection: playlists

    });

    playlist.render();

  });

}



function Update_song (pop) {
  var songs = new SongsListColection();
  songs.set(pop);
  var pageView = new SongsView({
    el: document.getElementById('name_songs'),
    collection: songs
  });
  pageView.render();

}


function Populate() {//populate from json


playlist.map(function (val,i){

  function Songs( vall,y){
    var song= [];
    song[y]=new Song(vall);
    playlist_1[i].setSong(song[y]);
  }

  playlist_1[i] = new Playlist(val);

  val.songs.map(Songs);

});


}

function Search_music() {
   search  = new SearchMusic();
   var SongTitleArray = search.PopulateSearchList(playlist_1);
      SongTitleArray.forEach(function(a){
        var list  =  document.getElementById("search_music");
        var option1  =  document.getElementById("option_music");
        var cloneOption  =  option1.cloneNode(true);
        option1.value  = a;
        list.appendChild(cloneOption);
    });
}

function PlaylistChangeTitle(pop) {
  document.getElementById("img_play_big").src  =  pop.imageLarge;
  document.getElementById("text_playlist2").innerHTML = pop.title;

}

function Clear_playlist() {

  var list  =  document.getElementById("name_songs");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
function scrollup() {
  window.scrollTo(0,0);
  document.getElementById("focus").focus();
}
function close1(){
  var x = document.getElementById("pop_playlist1");
  x.style.transition = "0.5s";
  x.style.height = "0px";
}
