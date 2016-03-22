/*-----------Playlist Class Implementation----------------------------------*/

function Playlist(id,title,description,img){
  this.id = id;
  this.songList = [];
  this.description = description;
  this.img = img;
  this.title = title;
}
// Playlist Class Methods
Playlist.prototype={
  getTitle:function(){
    return this.title;
  },
  setTitle:function(newTitle){
    this.title = newTitle;
  },
  getId:function(){
    return this.id;
  },
  setId:function(id){
    this.id=id;
  },
  getSongList:function(){
    return this.songList;
  },
  setSongList:function(list){
    //!!! implement to automatically populate playlist with Song objects
    for(i=0;i<list.length;i++){
        this.addSong(new Song(list[i].songTitle, list[i].songAuthor, list[i].image, list[i].songLength));
    }
    this.songList=list;
  },
  addSong:function(newSong){
    this.songList.push(newSong);
  },
  getDescription:function(){
    return this.description;
  },
  setDescription:function(desc){
    this.description=desc;
  },
  getImg:function(){
    return this.img;
  },
  setImg:function(img){
    this.img=img;
  }

};
