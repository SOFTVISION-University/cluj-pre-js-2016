function Draw() {

}

Draw.prototype.beObserver =function(playlist){
  playlist.observers.push(this);
}

Draw.prototype.drawUpdate =function(song){
  console.log("drawSong");

    var div = document.getElementsByClassName("divToClone")[0];
    var tempSong = song;

    clonedDiv = div.cloneNode(true);


    document.getElementById('playList').appendChild(clonedDiv);

    clonedDiv.style.visibility='visible';
    var imgPath = tempSong.getSongImage();
    var img = clonedDiv.getElementsByTagName('img')[0];
    img.style.float = "left";
    img.style.backgroundImage = 'url("'+imgPath+'")';

    var tempDiv = clonedDiv.getElementsByTagName('div')[0];
    tempDiv.style.textAlign = "center";
    tempDiv.style.width = "50%";
    tempDiv.style.display = "inline-block";
    var span = tempDiv.getElementsByTagName('span')[0];
    span.className = "gray";
    span.innerText=tempSong.getSongTitle();
    var span = tempDiv.getElementsByTagName('span')[1];
    span.innerText = tempSong.getSongAuthor();
    span.className = "small";


    var tempDiv = clonedDiv.getElementsByTagName('div')[1];
    tempDiv.style.textAlign = "center";
    tempDiv.style.width = "10%";
    tempDiv.style.display = "inline-block";
    var span = tempDiv.getElementsByTagName('span')[0];
    span.innerText = convertToMin(tempSong.getSongDuration());

    var tempDiv = clonedDiv.getElementsByTagName('div')[2];
    tempDiv.style.textAlign = "center";
    tempDiv.style.width = "20%";
    tempDiv.style.display = "inline-block";
    var span = tempDiv.getElementsByTagName('span')[0];
    span.innerText = tempSong.getSongCount();


}
