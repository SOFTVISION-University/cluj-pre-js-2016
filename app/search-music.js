

  function getSongList (val) {
    return val.songs;

  }
  function getSongTitle (val) {
    return val.songTitle;
  }

  function reduceSongList(mem,val) {
    return mem.concat(val);

  }


function SearchMusic () {

}


SearchMusic.prototype.PopulateSearchList = function (playlist){

  var array_songs = (((playlist.map(getSongList)).reduce(reduceSongList,[])).
                    map(getSongTitle));


  return array_songs;

};


SearchMusic.prototype.SearchByValue = function(values,playlist) {
  playlist.forEach(function(entry) {
       entry.songs.forEach(function(song) {
       if (values == song.getTitle()) {
         clonare(entry.getId());
       }
     });
   });
};
