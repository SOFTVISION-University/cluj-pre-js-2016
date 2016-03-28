function PlaylistView() {

}

PlaylistView.prototype.beObserver = function(playlist){
  playlist.observers.push(this);
};

PlaylistView.prototype.update = function(song){

    var div = document.getElementsByClassName("divToClone")[0];
    var currentSong = song;

    clonedDiv = div.cloneNode(true);
    clonedDiv.className= "divToClone";
    document.getElementById('songsHolder').appendChild(clonedDiv);

    this.drawSongImage(clonedDiv , currentSong);
    this.drawSongTitle(clonedDiv , currentSong);
    this.drawSongDuration(clonedDiv , currentSong);
    this.drawSongCount(clonedDiv , currentSong);

};
PlaylistView.prototype.drawSongImage = function(clonedDiv , currentSong){
  clonedDiv.style.visibility='visible';
  var imgPath = currentSong.getSongImage();
  var img = clonedDiv.getElementsByTagName('img')[0];
  img.style.float = "left";
  img.style.backgroundImage = 'url("'+imgPath+'")';
};
PlaylistView.prototype.drawSongTitle = function(clonedDiv , currentSong){
  var songTitle = clonedDiv.getElementsByTagName('div')[0];
  songTitle.className = "songTitleDiv";
  var spanTitle = songTitle.getElementsByTagName('span')[0];
  spanTitle.className = "gray";
  spanTitle.innerText=currentSong.getSongTitle();
  var spanAuthor = songTitle.getElementsByTagName('span')[1];
  spanAuthor.innerText = currentSong.getSongAuthor();
  spanAuthor.className = "small";

};

PlaylistView.prototype.drawSongDuration = function(clonedDiv , currentSong){
  var songDurationDiv = clonedDiv.getElementsByTagName('div')[1];
  songDurationDiv.className = "songDurationDiv";
  var span = songDurationDiv.getElementsByTagName('span')[0];
  span.innerText = convertToMin(currentSong.getSongDuration());
};

PlaylistView.prototype.drawSongCount = function(clonedDiv , currentSong){

      var songCountDiv = clonedDiv.getElementsByTagName('div')[2];
      songCountDiv.className="songCountDiv";
      var span = songCountDiv.getElementsByTagName('span')[0];
      span.innerText = currentSong.getSongCount();
};
