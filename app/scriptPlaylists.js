var playlistsJSON = '[{"id":0,"title":"Playlist 1","image":"../core/assets/up-all-night-small.png","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82},{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies pierdut","songAuthor":"Dr. Dre","songLength":186,"songListened":78},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money pierdut ea","songAuthor":"Andra","songLength":303,"songListened":94},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies el buletin ea","songAuthor":"Andra","songLength":359,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin el buletin love","songAuthor":"Eminem","songLength":312,"songListened":11},{"image":"../core/assets/2015-best-music.png","songTitle":"pierdut pierdut enemies ea","songAuthor":"Eminem","songLength":37,"songListened":9},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money enemies enemies","songAuthor":"Dr. Dre","songLength":325,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money el money","songAuthor":"Eminem","songLength":58,"songListened":10}]},{"id":1,"title":"Playlist 2","image":"../core/assets/up-all-night-small.png","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"money money love ea","songAuthor":"Dr. Dre","songLength":97,"songListened":100},{"image":"../core/assets/2015-best-music.png","songTitle":"el pierdut pierdut ea","songAuthor":"Smiley","songLength":42,"songListened":86},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money pierdut enemies","songAuthor":"Dr. Dre","songLength":454,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"money ea love buletin","songAuthor":"Dr. Dre","songLength":448,"songListened":16},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin pierdut ea el","songAuthor":"Dr. Dre","songLength":363,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"el love el buletin","songAuthor":"Smiley","songLength":88,"songListened":20}]},{"id":2,"title":"Playlist 3","image":"../core/assets/up-all-night-small.png","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"enemies enemies el love","songAuthor":"Smiley","songLength":192,"songListened":51},{"image":"../core/assets/2015-best-music.png","songTitle":"el enemies pierdut el","songAuthor":"Andra","songLength":232,"songListened":87},{"image":"../core/assets/2015-best-music.png","songTitle":"ea enemies pierdut enemies","songAuthor":"Smiley","songLength":234,"songListened":5},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies ea enemies buletin","songAuthor":"Andra","songLength":123,"songListened":45},{"image":"../core/assets/2015-best-music.png","songTitle":"love money buletin love","songAuthor":"Andra","songLength":299,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"el love ea love","songAuthor":"Andra","songLength":478,"songListened":34},{"image":"../core/assets/2015-best-music.png","songTitle":"ea el enemies money","songAuthor":"Dr. Dre","songLength":280,"songListened":35}]}]';
var jsonObject = JSON.parse(playlistsJSON);

// Array container for playlists
var playlistsContainer = [];

for(i = 0;i<jsonObject.length;i++){
  playlistsContainer.push(new Playlist(i,jsonObject[i].title,jsonObject[i].description,jsonObject[i].image)); //  push new playlist into arrayContainer. !! description not yet implemented in JSON
  playlistsContainer[i].setSongList(jsonObject[i].songs);   // setSongList because Playlist does not take songlist as constructor argument
}


          function getJson(list){
              clearPlaylist();
              var songsList = jsonObject[list].songs;
               //alert(jsonObject[0].songs.length);
              var songsListDiv = document.getElementById('songs');
              for(i = 0;i<songsList.length;i++){
                  var songDiv = document.createElement("div");
                  songDiv.setAttribute("class","songDiv");

                  var songImg = document.createElement("img");
                  songImg.setAttribute("class","songImg");
                  songImg.setAttribute("src",songsList[i].image);

                  var songLength = document.createElement("div");
                  songLength.setAttribute("class","songNumbers");

                  songLength.appendChild(document.createTextNode(Math.floor(songsList[i].songLength/60)+":"+(songsList[i].songLength%60<10?"0":"")+(songsList[i].songLength%60)));

                  // songLength.appendChild(document.createTextNode(Math.floor(songsList[i].songLength/60)+":"+(songsList[i].songLength%60<10?"0":"")+(songsList[i].songLength%60)));
                  songLength.appendChild(document.createTextNode(lengthFormat(songsList[i].songLength)));


                  var songPlayed = document.createElement("div");
                  songPlayed.setAttribute("class","songNumbers");
                  songPlayed.appendChild(document.createTextNode(songsList[i].songListened));

                  var songTitle = document.createElement("span");
                  songTitle.classList.add("songTitle");
                  songTitle.classList.add("textBiggerGri");
                  songTitle.appendChild(document.createTextNode(songsList[i].songTitle));

                  var songAuthor = document.createElement("span");
                  songAuthor.classList.add("textMediuGri");
                  songAuthor.appendChild(document.createTextNode("by "+songsList[i].songAuthor));

                  songDiv.appendChild(songImg);
                  songDiv.appendChild(songPlayed);
                  songDiv.appendChild(songLength);
                  songDiv.appendChild(songTitle);
                  songDiv.appendChild(songAuthor);


                  songsListDiv.appendChild(songDiv);
              }
          }
          function clearPlaylist(){
            var songsListDiv = document.getElementById('songs');
            while(songsListDiv.firstChild){
                songsListDiv.removeChild(songsListDiv.firstChild);
              }
          }


          function lengthFormat(length){
            var minutes,seconds;
            minutes = Math.floor(length/60);
            seconds = (length%60<10?"0":"")+(length%60);
            return minutes+":"+seconds;
          }
