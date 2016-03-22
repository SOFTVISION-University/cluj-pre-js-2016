function Playlist(id,title,img,about){
  this.id=id;
  this.title=title;
  this.img=img;
  this.about=about;
  this.songList=[];
}

Playlist.prototype={
  getId:function(){
    return this.id;
  },

  setId:function(id){
    this.id=id;
  },

  getTitle:function(){
    return this.title;
  },

  setTitle:function(title){
    this.title=title;
  },

  getImg:function(){
    return this.img;
  },

  setImg:function(img){
    this.img=img;
  },

  getAbout:function(){
    return this.about;
  },

  setAbout:function(about){
    this.about=about;
  },

  getsongList:function(){
    return this.songList;
  },

  setsongList:function(songlist){
    this.songlist=songlist;
  },
}
