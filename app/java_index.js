
var playlistsJSON = '[{"id":0,"title":"Playlist 1","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82},{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies pierdut","songAuthor":"Dr. Dre","songLength":186,"songListened":78},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money pierdut ea","songAuthor":"Andra","songLength":303,"songListened":94},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies el buletin ea","songAuthor":"Andra","songLength":359,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin el buletin love","songAuthor":"Eminem","songLength":312,"songListened":11},{"image":"../core/assets/2015-best-music.png","songTitle":"pierdut pierdut enemies ea","songAuthor":"Eminem","songLength":37,"songListened":9},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money enemies enemies","songAuthor":"Dr. Dre","songLength":325,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money el money","songAuthor":"Eminem","songLength":58,"songListened":10}],"imageLarge":"../core/assets/up-all-night.png","imageSmall":"../core/assets/up-all-night-small.png","description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."},{"id":1,"title":"Playlist 2","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"money money love ea","songAuthor":"Dr. Dre","songLength":97,"songListened":100},{"image":"../core/assets/2015-best-music.png","songTitle":"el pierdut pierdut ea","songAuthor":"Smiley","songLength":42,"songListened":86},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money pierdut enemies","songAuthor":"Dr. Dre","songLength":454,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"money ea love buletin","songAuthor":"Dr. Dre","songLength":448,"songListened":16},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin pierdut ea el","songAuthor":"Dr. Dre","songLength":363,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"el love el buletin","songAuthor":"Smiley","songLength":88,"songListened":20}],"imageLarge":"../core/assets/up-all-night.png","imageSmall":"../core/assets/up-all-night-small.png","description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."},{"id":2,"title":"Playlist 3","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"enemies enemies el love","songAuthor":"Smiley","songLength":192,"songListened":51},{"image":"../core/assets/2015-best-music.png","songTitle":"el enemies pierdut el","songAuthor":"Andra","songLength":232,"songListened":87},{"image":"../core/assets/2015-best-music.png","songTitle":"ea enemies pierdut enemies","songAuthor":"Smiley","songLength":234,"songListened":5},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies ea enemies buletin","songAuthor":"Andra","songLength":123,"songListened":45},{"image":"../core/assets/2015-best-music.png","songTitle":"love money buletin love","songAuthor":"Andra","songLength":299,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"el love ea love","songAuthor":"Andra","songLength":478,"songListened":34},{"image":"../core/assets/2015-best-music.png","songTitle":"ea el enemies money","songAuthor":"Dr. Dre","songLength":280,"songListened":35}],"imageLarge":"../core/assets/up-all-night.png","imageSmall":"../core/assets/up-all-night-small.png","description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."}]';


function clear_play(){

  var list = document.getElementById("container1");
 while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
}
}

function move() {
var x=document.getElementById("pop_playlist1");

if(x.style.height=="0px"){
x.style.transition="0.5s";
x.style.height="800px";
  }
else{
  x.style.transition="0.5s";
  x.style.height="0px";
    }
}

function scrollup() {

window.scrollTo(0,0)

}


function createCards() {

  var myDiv;
      container=document.getElementById("container1");
      myDiv = document.createElement('div');
      myDiv.innerText
      myDiv.className = 'card';
      myDiv.style= "margin-left:5px";
      container.appendChild(myDiv);




}
function close1(){
var x=document.getElementById("pop_playlist1");
  x.style.transition="0.5s";
  x.style.height="0px";

}

function clonare(pop){


  var x=document.getElementById("pop_playlist1");
  x.style.transition="0.5s";
  x.style.height="800px";

 var y=0;
 if(y==0){
  var playlist=JSON.parse(playlistsJSON);
  var playlist_1=playlist[pop].songs;

  for(x=0;x<5;x++){

     var container=document.getElementById("name_songs");
     var myDiv = document.getElementById("container1");
     var divClone = myDiv.cloneNode(true);

    document.getElementById("photo_id").src = playlist_1[x].image;;
    document.getElementById("title_id").innerHTML=playlist_1[x].songTitle;
    document.getElementById("subtitle_id").innerHTML=playlist_1[x].songAuthor;
    document.getElementById("leght_song").innerHTML=playlist_1[x].songLength;
    document.getElementById("time_song").innerHTML=playlist_1[x].songListened;
    container.appendChild(divClone);
     }
     y++;
 }

}

function Playlist_change(){


  var playlist=JSON.parse(playlistsJSON);

    document.getElementById("img_play_1").src = playlist[0].imageLarge;
    document.getElementById("img_play_2").src = playlist[1].imageLarge;
    document.getElementById("img_play_3").src = playlist[2].imageLarge;
    document.getElementById("title_play_1").innerHTML=playlist[0].title;
    document.getElementById("title_play_2").innerHTML=playlist[1].title;
    document.getElementById("title_play_3").innerHTML=playlist[2].title;


document.getElementById("text_play_1").innerHTML=playlist[0].description;

document.getElementById("text_play_2").innerHTML=playlist[1].description;

document.getElementById("text_play_3").innerHTML=playlist[2].description;


}
