var jsonObj = {
    playlist:
           {
            picture1: "../core/assets/massive-pop-hits.png",
            title1: "text1",
            description:"text2",
            songs:
            [
                "value1",
                "value2",
                "value3",
                "value4",
                "value5"
            ],
            songPict:["../core/assets/beats-like-birds.png",
            "../core/assets/chill-vibes.png",
            "../core/assets/indie-rocker.png",
            "../core/assets/random-playlist.png",
            "../core/assets/beats-like-birds.png"]


        }
}
var jsonUserName={
      name:"username",
      password:"password"
}

var playListFromJS= JSON.parse(playlistsJSON);


document.addEventListener("DOMContentLoaded", function(event) {

    var path = jsonObj.playlist.picture1;

    document.getElementById('playL1').style.backgroundImage='url("'+path+'")';
    var a=  Array.prototype.slice.call(jsonObj);

  });
// playlist class
function Playlist(data) {
  this.playlistName="test";
  this.image= data.image;
  this.songsList=[];
}
Playlist.prototype.setName= function(name){
  this.playlistName = name;
}
Playlist.prototype.addSong= function(song){
    this.songsList.push(song);
}
//end Playlist class

// Song Class
function Song(data){
  this.image=data.image;
  this.songName=data.songTitle;
  this.artistName=data.songAuthor;
  this.duration=data.songLength;
  this.count=data.songListened;
}
// end Song Class


//start click explore playlist
function myFunction(playlistNr){

  document.getElementById('playList').style.visibility="visible";
  document.getElementById('playList').style.transition= "0.5s";
  document.getElementById('playList').style.height="400px";

  var songsArray=[];
  var selectedPlaylist=playListFromJS[playlistNr];
  var playListObject= new Playlist(selectedPlaylist);
  playListObject.setName(selectedPlaylist.title);
  console.log(selectedPlaylist.title);


  for (var i = 0; i <  selectedPlaylist.songs.length; i++)
  {
      var song= new Song(selectedPlaylist.songs[i]);
      playListObject.addSong(song);
  }

  console.log(playListObject);

  for (var i = 0; i <  playListObject.songsList.length; i++)
  {
    var nr=i+1;
    var div = document.getElementsByClassName("divToClone")[0];
    var tempSong = playListObject.songsList[i];

    clonedDiv = div.cloneNode(true);

    clonedDiv.id = "song"+nr;
    document.getElementById('playList').appendChild(clonedDiv);

    document.getElementById('song'+nr).style.visibility='visible';
    var imgPath =tempSong.image;
    var img=clonedDiv.getElementsByTagName('img')[0];
    img.style.float="left";
    img.style.backgroundImage='url("'+imgPath+'")';

    var tempDiv =clonedDiv.getElementsByTagName('div')[0];
    tempDiv.style.textAlign="center";
    tempDiv.style.width="50%";
    tempDiv.style.display="inline-block";
    var span=tempDiv.getElementsByTagName('span')[0];
    span.innerText=tempSong.songName;

    var tempDiv =clonedDiv.getElementsByTagName('div')[1];
    tempDiv.style.textAlign="center";
    tempDiv.style.width="10%";
    tempDiv.style.display="inline-block";
    var span=tempDiv.getElementsByTagName('span')[0];
    span.innerText=convertToMin(tempSong.duration);

    var tempDiv =clonedDiv.getElementsByTagName('div')[2];
    tempDiv.style.textAlign="center";
    tempDiv.style.width="20%";
    tempDiv.style.display="inline-block";
    var span=tempDiv.getElementsByTagName('span')[0];
    span.innerText=tempSong.count;

  }
}
//end click explore playlist

function convertToMin(nr)
{
  var min = Math.floor(nr / 60);
  var sec = nr % 60;

  if (sec<10)
  {
    sec +="0";
  }
  var str = min+":"+sec;
  return str;
}
