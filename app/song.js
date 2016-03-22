function Song(image,songTitle,songAuthor,songLength,songListened){
  this.image=image;
  this.songTitle=songTitle;
  this.songAuthor=songAuthor;
  this.songLength=songLength;
  this.songListened=songListened;
}
  Song.prototype={
    getImage:function(){
      return this.image;
    },

    setImage:function(image){
      this.image=image;
    },

    getSongTitle:function(){
      return this.songTitle;
    },

    setSongTitle:function(songTitle){
      this.songTitle=songTitle;
    },

    getSongAuthor:function(){
      return this.songAuthor;
    },

    setSongAuthor:function(songAuthor){
      this.songAuthor=songAuthor;
    },

    getSongLength:function(){
      return this.songLength;
    },

    setSongLength:function(songLength){
      this.songLength=songLength;
    },

    getSongListened:function(){
      return this.songListened;
    },

    setSongListened:function(songListened){
      this.songListened=songListened;
    },

  };
