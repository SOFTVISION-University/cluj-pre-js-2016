var collectionSongObjects = [];
var numberOfPlaylists =  playlistArray.length;
var numberOfSongs = 0;

for(var i = 0; i < playlistArray.length; i++){
	numberOfSongs += playlistArray[i].songs.length;
}

function Song(songTitle, songAuthor, songLength, songListened, img){
  this.songTitle = songTitle;
  this.songAuthor = songAuthor;
  this.songLength = songLength;
  this.songListened = songListened;
  this.img = img;
}

Song.prototype.setSongTitle = function(songTitle){
  this.songTitle = songTitle;
};

Song.prototype.getSongTitle = function(){
  return this.songTitle;
};

Song.prototype.setSongAuthor = function(songAuthor){
  this.songAuthor = songAuthor;
};

Song.prototype.getSongAuthor = function(){
  return this.songAuthor;
};

Song.prototype.setSongLength = function(songLength){
  this.songLength = songLength;
};

Song.prototype.getSongLength = function(){
  return this.songLength;
};

Song.prototype.setSongListened = function(songListened){
  this.songListened = songListened;
};

Song.prototype.getSongListened = function(){
  return this.songListened;
};

Song.prototype.setImg = function(img){
  this.img = img;
};

Song.prototype.getImg = function(){
  return this.img;
};


for(var j = 0; j < numberOfPlaylists; j++){
	for(var k = 0; k < playlistArray[j].songs.length; k++){
		collectionSongObjects.push(new Song(playlistArray[j].songs[k].songTitle, playlistArray[j].songs[k].songAuthor, playlistArray[j].songs[k].songLength, playlistArray[j].songs[k].songListened, playlistArray[j].songs[k].image));
	}
}
