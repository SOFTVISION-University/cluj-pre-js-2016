function SearchMusic () {

}





SearchMusic.prototype.SearchByValue = function(values,playlist) {

  for (i = 0;i < playlist.length;i++) {
    var dim = playlist[i].getLengthSongs();
    for (y = 0;y < dim;y++){
      if (values == playlist[i].songs[y].getTitle()) {
        clonare(i);
        break;
      }
    }

  }

}
