function getPlaylistSongs(val){
  return val.songs;
}

function concatSongsArray(memo,val){
  return memo.concat(val);
}

function getSongTitles(val){
  return val.songTitle;
}

function filterFunc(val){
  if (val.indexOf(document.getElementById("searchStr").value) === 0){
    return val;
  }
}

function searchMusic(e) {
    var songsArray = ((playListFromJS.map(getPlaylistSongs)).reduce(concatSongsArray,[]).map(getSongTitles)).filter(filterFunc);
    clearMusicResult();
    songsArray.forEach(drawResults);
}

function clearMusicResult(){
    var searchMusicDiv = document.getElementById('search_music');
    searchMusicDiv.innerHTML="";
}

function drawResults(result){
  var searchMusicDiv = document.getElementById('search_music');
  var musicResultDiv = document.getElementById('option_music');
  clonedResult = musicResultDiv.cloneNode(true);
  clonedResult.value = result;
  searchMusicDiv.appendChild(clonedResult);
}
