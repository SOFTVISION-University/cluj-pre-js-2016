
var playlistsJSON  =  '[{"id":0,"title":"Playlist 1","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82},{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies pierdut","songAuthor":"Dr. Dre","songLength":186,"songListened":78},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money pierdut ea","songAuthor":"Andra","songLength":303,"songListened":94},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies el buletin ea","songAuthor":"Andra","songLength":359,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin el buletin love","songAuthor":"Eminem","songLength":312,"songListened":11},{"image":"../core/assets/2015-best-music.png","songTitle":"pierdut pierdut enemies ea","songAuthor":"Eminem","songLength":37,"songListened":9},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money enemies enemies","songAuthor":"Dr. Dre","songLength":325,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money el money","songAuthor":"Eminem","songLength":58,"songListened":10}],"imageLarge":"../core/assets/dj-killer-mixes.png","imageSmall":"../core/assets/up-all-night-small.png","description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."},{"id":1,"title":"Playlist 2","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"money money love ea","songAuthor":"Dr. Dre","songLength":97,"songListened":100},{"image":"../core/assets/2015-best-music.png","songTitle":"el pierdut pierdut ea","songAuthor":"Smiley","songLength":42,"songListened":86},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money pierdut enemies","songAuthor":"Dr. Dre","songLength":454,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"money ea love buletin","songAuthor":"Dr. Dre","songLength":448,"songListened":16},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin pierdut ea el","songAuthor":"Dr. Dre","songLength":363,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"el love el buletin","songAuthor":"Smiley","songLength":88,"songListened":20}],"imageLarge":"../core/assets/up-all-night.png","imageSmall":"../core/assets/up-all-night-small.png","description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."},{"id":2,"title":"Playlist 3","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"enemies enemies el love","songAuthor":"Smiley","songLength":192,"songListened":51},{"image":"../core/assets/2015-best-music.png","songTitle":"el enemies pierdut el","songAuthor":"Andra","songLength":232,"songListened":87},{"image":"../core/assets/2015-best-music.png","songTitle":"ea enemies pierdut enemies","songAuthor":"Smiley","songLength":234,"songListened":5},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies ea enemies buletin","songAuthor":"Andra","songLength":123,"songListened":45},{"image":"../core/assets/2015-best-music.png","songTitle":"love money buletin love","songAuthor":"Andra","songLength":299,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"el love ea love","songAuthor":"Andra","songLength":478,"songListened":34},{"image":"../core/assets/2015-best-music.png","songTitle":"ea el enemies money","songAuthor":"Dr. Dre","songLength":280,"songListened":35}],"imageLarge":"../core/assets/up-all-night.png","imageSmall":"../core/assets/up-all-night-small.png","description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."}]';
var playlist = JSON.parse(playlistsJSON);
var playlist_1 = [];


function clonare(pop) {//onclick event

  clear_play();//clear songs in playlist
  Playlist_change2(pop);
  openPlaylist();
  Update_song(pop);


}
function OnLoad() { //on load event

  Populate();
  Search_music();
  Update_playlist();
}

function openPlaylist() {

  var x = document.getElementById("pop_playlist1");
  x.style.transition = "0.5s";
  x.style.height = "800px";

}


function Search(e) { //search event on key pressed
  if (e.keyCode  ==  13)	{
    var values  =  document.getElementById("search").value;
    var search  = new SearchMusic();
    search.SearchByValue(values,playlist_1);
    return false;
  }

}



function Update_playlist() {
  document.getElementById("img_play_1").src  =  playlist_1[0].getImageLarge();
  document.getElementById("img_play_2").src  =  playlist_1[1].getImageLarge();
  document.getElementById("img_play_3").src  =  playlist_1[2].getImageLarge();
  document.getElementById("title_play_1").innerHTML = playlist_1[0].getTitle();
  document.getElementById("title_play_2").innerHTML = playlist_1[1].getTitle();
  document.getElementById("title_play_3").innerHTML = playlist_1[2].getTitle()
  document.getElementById("text_play_1").innerHTML = playlist_1[0].getDescription();
  document.getElementById("text_play_2").innerHTML = playlist_1[1].getDescription();
  document.getElementById("text_play_3").innerHTML = playlist_1[2].getDescription();
}

function Update_song(pop){
  for (i = 0; i < playlist_1[pop].songs.length;i++) {

    var container  =  document.getElementById("name_songs");
    var myDiv  =  document.getElementById("container1");
    document.getElementById("photo_id").src  =  playlist_1[pop].songs[i].getImage();
    document.getElementById("title_id").innerHTML =  playlist_1[pop].songs[i].getTitle();
    document.getElementById("subtitle_id").innerHTML =  playlist_1[pop].songs[i].getAuthor();
    document.getElementById("leght_song").innerHTML = time_change( playlist_1[pop].songs[i].getLength());
    document.getElementById("time_song").innerHTML =  playlist_1[pop].songs[i].getListened();
    var divClone  =  myDiv.cloneNode(true);
    container.appendChild(divClone);
  }
}

function Populate(){//populate from json
  for (i = 0;i < playlist.length;i++) {

    playlist_1[i] = new Playlist(playlist[i]);
    for (y = 0; y < playlist[i].songs.length;y++) {
      var song = [];
      song[y] = new Song(playlist[i].songs[y]);
      playlist_1[i].setSong(song[y]);
    }


  }

}

function Search_music() {

  for (i  =  0;i < playlist_1.length;i++){
    var dim  =  playlist_1[i].getLengthSongs();
    for (y = 0;y < dim;y++) {
      var list  =  document.getElementById("search_music");
      var option1  =  document.getElementById("option_music");
      var cloneOption  =  option1.cloneNode(true);
      option1.value  =  playlist_1[i].songs[y].getTitle();
      list.appendChild(cloneOption);

    }
  }
}

function Playlist_change2(pop) {
  document.getElementById("img_play_big").src  =  playlist_1[pop].getImageLarge();
  document.getElementById("text_playlist2").innerHTML = playlist_1[pop].getTitle();

}

function clear_play() {

  var list  =  document.getElementById("name_songs");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
function scrollup() {
  window.scrollTo(0,0)
  document.getElementById("focus").focus();
}
function close1(){
  var x = document.getElementById("pop_playlist1");
  x.style.transition = "0.5s";
  x.style.height = "0px";
}
