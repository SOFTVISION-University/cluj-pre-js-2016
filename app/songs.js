/*-----------Song Class Implementation----------------------------------*/

function Song(title,author,imagePath,length){
  this.title = title;
  this.author = author;
  this.imagePath = imagePath;
  this.length = length;
  this.playCount = 0;
}
// Static loading of songs
// Song.loadSongs = function(){
//     alert("Loading Songs");
//     // To be implemented..
// };
// Song class methods
Song.prototype={
  getTitle:function(){
    return this.title;
  },
  setTitle:function(newTitle){
    this.title = newTitle;
  },
  getAuthor:function(){
    return this.author;
  },
  setAuthor:function(newAuthor){
    this.author = newAuthor;
  },
  getImagePath:function(){
    return this.imagePath;
  },
  setImagePath:function(newPath){
    this.imagePath = newPath;
  },
  getLength:function(){
    return this.length;
  },
  setLength:function(newLength){
    this.length = newLength;
  },
  getPlayCount:function(){
    return this.playCount;
  },
  setPlayCount:function(playCount){
    this.playCount = playCount;
  },
  increasePlayCount:function(){
    this.playCount++;
  }

};


/*---------------------------------------------------------------------*/
/*
s1 = new Song("Sorry","Bieber","../blabla/blala.jpg","3:52");
s2 = new Song("NotSorry","SecondBieber","../blabla/bla2la.jpg","2:14");
s3 = new Song("Wow","BieberAgain","../bldabla/blala.jpg","3:24");

p1 = new Playlist(0,"Rap","Cea mai Rea muzica Ever","/img.png");
*/
