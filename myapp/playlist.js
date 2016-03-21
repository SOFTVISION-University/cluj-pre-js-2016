var songJSON=JSON.parse(playlistsJSON);
var l=songJSON.length;

var playlist=[];
var songs=[];

function Song(data){
  this.image=data.image;
  this.songTitle=data.songTitle;
  this.songAuthor=data.songAuthor;
  this.songLength=data.songLength;
  this.songListened=data.songListened;
}

function Playlist(data){
  this.id=data.id;
  this.title=data.title;
  this.songs=[];
  for(j=0;j<data.songs.length;j++)
  {
    var tempSong = new Song(data.songs[j]);
    this.songs.push(tempSong);
  }
}

for(i=0;i<l;i++){
  playlist[i]=new Playlist(songJSON[i]);
  console.log(playlist[i]);
  console.log(playlist[i].songs[0]);
}

var lengthSongs=songJSON[0].songs.length;

function displaySongs(){
    var ni = document.getElementById('plyL');
    for(j=0;j<lengthSongs;j++){
      var newdiv = document.createElement('div');
      var divIdName = 'song';
      newdiv.setAttribute('id',divIdName);
      newdiv.innerHTML = playlist[0].songs[j].songTitle;
      ni.appendChild(newdiv);
    }
}
