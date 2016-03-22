

function loginFunction(){
  window.location.href = "login.html";
}

var dataInformation = JSON.parse(playlistsJSON);
var allPlaylist = document.getElementsByClassName('section-absolute')[0];
var popUpPlaylist = document.getElementById('playlistAbsolut');



generatePlaylists();


function generatePlaylists(){

for (var i=0; i < dataInformation.length; i++)
  {
      createElement(dataInformation[i]);
  }
}
function createElement(elem){
  var bigDiv = document.createElement('div');
  bigDiv.setAttribute("class","individual-playlist");
  allPlaylist.appendChild(bigDiv);
  var middleDiv= document.createElement('div');
  middleDiv.setAttribute("id","individual-playlist-button");
  //ADD HERE THE EVENT
  bigDiv.appendChild(middleDiv);

  middleDiv.addEventListener('click', function(){
    var title = elem.title;
    showPlaylist(title);
  });
  /////
  var imgBut = document.createElement('img');
  imgBut.setAttribute("src", "../core/assets/play-icon.png");
  imgBut.naturalHeight;
  imgBut.naturalWidth;
  middleDiv.appendChild(imgBut);
  var paraGraph = document.createElement('p');
  paraGraph.innerHTML = 'Explore Playlist';
  middleDiv.appendChild(paraGraph);
  /////
  var imgObj = document.createElement('img');
  imgObj.setAttribute("src",elem.imageLarge);
  imgObj.naturalHeight;
  imgObj.naturalWidth;
  bigDiv.appendChild(imgObj);
  //////
  var hObj = document.createElement('h3');
  hObj.innerHTML = elem.title;
  bigDiv.appendChild(hObj);
  ////
  var pObj = document.createElement('p');
  pObj.innerHTML = elem.description;
  bigDiv.appendChild(pObj);

}

function showPlaylist(title_string){

  for(var i=0; i<   dataInformation.length;i++)
  {
    if(dataInformation[i].title == title_string)
    {
      constructIndividualPlaylist(dataInformation[i]);
    }
  }
  popUpPlaylist.style.display = 'inline';
}

function constructIndividualPlaylist(elem){

 removeChildsIfExits();
//popUpPlaylist big object;
var firstDiv = document.createElement('div');
firstDiv.setAttribute("class","playlist-top");
firstDiv.addEventListener('click',hidePlaylist);
popUpPlaylist.appendChild(firstDiv);
////
var aFirstDiv = document.createElement('a');
aFirstDiv.innerHTML = "CLOSE";
firstDiv.appendChild(aFirstDiv);
////
var imgFirstDiv = document.createElement('img');
imgFirstDiv.setAttribute("src", "../core/assets/close-icon.png");
imgFirstDiv.naturalHeight;
imgFirstDiv.naturalWidth;
firstDiv.appendChild(imgFirstDiv);
////
var secondDiv = document.createElement('div');
secondDiv.setAttribute("class","playlist-main");
popUpPlaylist.appendChild(secondDiv);
///
var imgSecondDiv = document.createElement('img');
imgSecondDiv.setAttribute("src", elem.imageSmall);
imgSecondDiv.naturalHeight;
imgSecondDiv.naturalWidth;
secondDiv.appendChild(imgSecondDiv);

var inSecondDivDiv = document.createElement('div');
secondDiv.appendChild(inSecondDivDiv);
var pinInSecondDivDiv =document.createElement('p');
pinInSecondDivDiv.innerHTML = "Playing from: ";
inSecondDivDiv.appendChild(pinInSecondDivDiv);
var hinInSecondDivDiv =document.createElement('h2');
hinInSecondDivDiv.innerHTML = elem.title + ": The remixes radio";
inSecondDivDiv.appendChild(hinInSecondDivDiv);
///// HERE STARTS THE TABLE
var table = document.createElement('table');
table.setAttribute("class","table_songs");
popUpPlaylist.appendChild(table);
var trInTable = document.createElement('tr');
trInTable.setAttribute("id","headTable");
table.appendChild(trInTable);
var thInTrTable = document.createElement('th');
thInTrTable.innerHTML = "SONGS";
trInTable.appendChild(thInTrTable);
var thInTrTable2 = document.createElement('th');
thInTrTable2.innerHTML = "LENGTH";
trInTable.appendChild(thInTrTable2);
var thInTrTable3 = document.createElement('th');
thInTrTable3.innerHTML = "LISTENED";
trInTable.appendChild(thInTrTable3);
////end head////
var trImportant = document.createElement('tr');
trImportant.setAttribute("class",'tr-second-in-table')
table.appendChild(trImportant);
playListSongsGenerater(elem.songs,trImportant);
}

function playListSongsGenerater(songs,trImportant){

 for (var i=0; i < songs.length;i++)
 {
   var trInTable2 = document.createElement('tr');
   trImportant.appendChild(trInTable2);
   var tdInTrTable2 = document.createElement('td');
   trInTable2.appendChild(tdInTrTable2);
   var divInTdInTr = document.createElement('div');
   divInTdInTr.setAttribute("class",'song-pic-text');
   tdInTrTable2.appendChild(divInTdInTr);
   var imgInDivTd = document.createElement('img');
   imgInDivTd.setAttribute("src", songs[i].image);
   imgInDivTd.naturalHeight;
   imgInDivTd.naturalWidth;
   divInTdInTr.appendChild(imgInDivTd);
   var divInTdInTrDiv = document.createElement('div');
   divInTdInTr.appendChild(divInTdInTrDiv);
   var h3inLastDiv = document.createElement('h3');
   h3inLastDiv.innerHTML =songs[i].songTitle;
   divInTdInTrDiv.appendChild(h3inLastDiv);
   var pinLastDiv = document.createElement('p');
   pinLastDiv.innerHTML = "by" + songs[i].songAuthor;
    divInTdInTrDiv.appendChild(pinLastDiv);
    var tdinTrTable3 = document.createElement('td');
    trInTable2.appendChild(tdinTrTable3);
    var pintdInTable3 = document.createElement('p');
    pintdInTable3.innerHTML = songs[i].songLength;
    tdinTrTable3.appendChild(pintdInTable3);
    //
    var tdinTrTable4 = document.createElement('td');
    trInTable2.appendChild(tdinTrTable4);
    var pintdInTable4 = document.createElement('p');
    pintdInTable4.innerHTML = songs[i].songListened;
    tdinTrTable4.appendChild(pintdInTable4);
 }
}

function removeChildsIfExits(){
  while (popUpPlaylist.firstChild) {
      popUpPlaylist.removeChild(popUpPlaylist.firstChild);
  }
}
function hidePlaylist(){

popUpPlaylist.style.display = 'none';
}
