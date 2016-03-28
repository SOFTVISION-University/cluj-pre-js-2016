function Song(path){
  this._image = path.image;
  this._songTitle = path.songTitle;
  this._songAuthor = path.songAuthor;
  this._songLength = path.songLength;
  this._songListened = path.songListened;
  this._observers = [];
}

Song.prototype.attach = function(observer){
  this._observers.push(observer);
};

Song.prototype.notify = function(){
  for(var i = 0; i<this._observers.length; i++){
        this._observers[i].update();
      }
};

Song.prototype.getSongImage = function(){
  return this._image;
};

Song.prototype.getSongTitle = function(){
  this.notify();
  return this._songTitle;

};

Song.prototype.getSongAuthor = function(){
  return this._songAuthor;
};

Song.prototype.getSongLength = function(){
  return this._songLength;
};

Song.prototype.getSongListened = function(){
  return this._songListened;
};

Song.prototype.setSongImage = function(image){
  this._image = image;
};

Song.prototype.setSongTitle = function(songTitle){
  this._songTitle = songTitle;
};

Song.prototype.setSongAuthor = function(songAuthor){
  this._songAuthor = songAuthor;
};

Song.prototype.setSongLength = function(songLength){
  this._songLength = songLength;
};

Song.prototype.setSongListened = function(songListened){
  this._songListened = songListened;
};
