var playListFromJS= JSON.parse(playlistsJSON);
var link = "http://quotes.rest/qod.json";
var jsonOffline = {
    "success": {
        "total": 1
    },
    "contents": {
        "quotes": [
            {
                "quote": "Be not afraid of greatness. Some are born great, some achieve greatness, and some have greatness thrust upon 'em....",
                "length": "116",
                "author": "William Shakespeare",
                "tags": [
                    "inspire"
                ],
                "category": "inspire",
                "date": "2016-03-28",
                "title": "Inspiring Quote of the day",
                "background": "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg",
                "id": "FG7_PlYnhPFaWL79P5076QeF"
            }
        ]
    }
};

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

getLinkContent();
});




$.ajax( {
   url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=metallica",
   jsonp: "callback",
   dataType: 'jsonp',
   data: {
       action: "query",
       list: "search",
       srsearch: "javascript",
       format: "json"
   },

   success: function(response) {
     console.log(response);
    var metallicaInfo = response.query.pages["18787"].extract;
     document.getElementById('mettalicaDiv').getElementsByTagName('span')[0].innerText = metallicaInfo;
   }
});




$.ajax( {
   url: "https://en.wikipedia.org//w/api.php?action=query&format=json&prop=pageimages%7Cextracts&exintro=&explaintext=&titles=metallica",
   jsonp: "callback",
   dataType: 'jsonp',
   data: {
       action: "query",
       list: "search",
       srsearch: "javascript",
       format: "json"
   },

    success: function(response) {
    var metallicaImage = response.query.pages["18787"].thumbnail.source;
    metallicaImage = metallicaImage.split("50")[0]+"400"+metallicaImage.split("50")[1];
    document.getElementById('mettalicaDiv').getElementsByTagName('img')[0].style.backgroundImage = 'url("'+metallicaImage+'")';
   }
});


function getLinkContent() {
    var linkPromise = new Promise(  function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    var objectFromServer = xhr.send();
    console.log(xhr.status);
    xhr.onload = function(){
      if(xhr.status >= 200 && xhr.status < 300){
        resolve(objectFromServer);
      }
      else {
        reject(jsonOffline);
      }
    };
  });

  linkPromise.then(function(val){
    parseResultFromServer(val);
  });
  linkPromise.catch(function(val){
    parseResultOffline(val);
  });
}

function parseResultFromServer(data){
  var title = data.contents;
  console.log(title);
}
function parseResultOffline(data){
 console.log("offline:"+data);
 var title = data.contents.quotes[0].quote;
 var author = data.contents.quotes[0].author;
 drawTitle(title , author);
 console.log(title);
}

function drawTitle(title , author){
  document.getElementById("bigTitle").innerText = title;
  document.getElementById("authorSmall").innerText = author;
}

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
