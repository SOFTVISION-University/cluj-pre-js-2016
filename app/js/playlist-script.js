
var parsatPlaylist=JSON.parse(playlistsJSON);

nrPlaylist = parsatPlaylist.length;



function Song(dataSong){
   this.image = dataSong.image;
   this.songAuthorauthor = dataSong.songAuthor;
   this.songLength = dataSong.songLength;
   this.songListened = dataSong.songListened;
   this.songTitle = dataSong.songTitle;
}


// function get for Song
Song.prototype.getImage = function(){
   return this.image;
 };

 Song.prototype.getSongTitle = function(){
    return this.songTitle;
  };
Song.prototype.getSongLength = function(){
   return this.songLength;
 };

 Song.prototype.getSongListened = function(){
    return this.songListened;
  };

 Song.prototype.getSongAuthor = function(){
   return this.songAuthor;
 };

// function set for Song
Song.prototype.setImage = function(imag){
   this.image = imag;
 };

 Song.prototype.setSongTitle = function(titlu){
    this.songTitle = titlu;
  };
Song.prototype.setSongLength = function(len){
   this.songLength = len;
 };

 Song.prototype.getSongListened = function(lis){
    this.songListened = lis;
  };

 Song.prototype.getSongAuthor = function(auth){
   this.songAuthor = auth;
 };

function Playlist(dataPlaylist){
  // this.id = dataPlaylist.id;
  // this.title = dataPlaylist.title;
  this.songs = [];

}


Playlist.prototype.addSong = function(songAdded){
  this.songs.push(songAdded);

}

var newPlaylist = new Playlist();
// newPlaylist.addSong("as");

// pt playlist-page
function afisare(id){
  var obj = document.getElementById(id);
  var buton = document.getElementById('afiseaza');
  if(obj.style.visibility == 'visible')
    {
      obj.style.visibility = 'hidden';
  }  else
     {
     obj.style.visibility = 'visible';
  }

  for (var i=0; i < parsatPlaylist[0].songs.length; i++)
  {
    var song= new Song(parsatPlaylist[0].songs[i]);
  
  }
}
