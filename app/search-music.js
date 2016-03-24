function SearchMusic () {

}





SearchMusic.prototype.SearchByValue = function(values,playlist) {
  playlist.forEach(function(entry) {
       entry.songs.forEach(function(song) {
       if (values == song.getTitle()) {
         clonare(entry.getId());
       }
     });
   });

/* Trying to use map and reduce
var array_songs = (((playlist.map(getSongList)).reduce(reduceSongList,[])).
                  map(getSongTitle)).filter(SearchSongTitle);

function getSongList (val) {
  return val.songs;

}
function getSongTitle (val) {
  return val.songTitle
}

function reduceSongList(mem,val) {
  return mem.concat(val);

}

function SearchSongTitle (val) {
  if(val.indexOf(values) === 0)
       return val;
}


console.log(array_songs);
*/
};
