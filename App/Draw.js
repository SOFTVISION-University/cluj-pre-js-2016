function PlaylistView() {

}

PlaylistView.prototype.beObserver = function(playlist){
  playlist.observers.push(this);
};

PlaylistView.prototype.update = function(song){
  console.log("drawSong");

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
  var tempDiv = clonedDiv.getElementsByTagName('div')[0];
  tempDiv.style.textAlign = "center";
  tempDiv.style.width = "70%";
  tempDiv.style.display = "inline-block";
  var spanTitle = tempDiv.getElementsByTagName('span')[0];
  spanTitle.className = "gray";
  spanTitle.innerText=currentSong.getSongTitle();
  var spanAuthor = tempDiv.getElementsByTagName('span')[1];
  spanAuthor.innerText = currentSong.getSongAuthor();
  spanAuthor.className = "small";

};

PlaylistView.prototype.drawSongDuration = function(clonedDiv , currentSong){
  var tempDiv = clonedDiv.getElementsByTagName('div')[1];
  tempDiv.style.textAlign = "center";
  tempDiv.style.width = "10%";
  tempDiv.style.display = "inline-block";
  var span = tempDiv.getElementsByTagName('span')[0];
  span.innerText = convertToMin(currentSong.getSongDuration());
};

PlaylistView.prototype.drawSongCount = function(clonedDiv , currentSong){

      var tempDiv = clonedDiv.getElementsByTagName('div')[2];
      tempDiv.style.textAlign = "center";
      tempDiv.style.width = "10%";
      tempDiv.style.display = "inline-block";
      var span = tempDiv.getElementsByTagName('span')[0];
      span.innerText = currentSong.getSongCount();
};
