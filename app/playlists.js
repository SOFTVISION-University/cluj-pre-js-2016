/*-----------Playlist Class Implementation----------------------------------*/

function Playlist(id, title, description, img) {
  this.id = id;
  this.songList = [];
  this.description = description;
  this.img = img;
  this.title = title;
}
//Playlist class static members
Playlist.playlistsContainer = [];

Playlist.populatePlayListContainer = function(json) {
    json.map(function(value, i) {
      this.push(ModelFactory.create('playlist', value));
      this[i].setSongList(value.songs);
    }, Playlist.playlistsContainer);
  }
  // Playlist Class Methods
Playlist.prototype = {
  getTitle: function() {
    return this.title;
  },
  setTitle: function(newTitle) {
    this.title = newTitle;
  },
  getId: function() {
    return this.id;
  },
  setId: function(id) {
    this.id = id;
  },
  getSongList: function() {
    return this.songList;
  },
  setSongList: function(list) {
    //!!! implement to automatically populate playlist with Song objects
    var songslist = [];
    list.map(function(key) {
      this.push(ModelFactory.create('song', key));
    }, songslist)
    this.songList = songslist;
  },
  addSong: function(newSong) {
    if (newSong instanceof Song) {
      this.songList.push(newSong);
    } else {
      console.log("newSong not an instance of Song");
    }
  },
  getDescription: function() {
    return this.description;
  },
  setDescription: function(desc) {
    this.description = desc;
  },
  getImg: function() {
    return this.img;
  },
  setImg: function(img) {
    this.img = img;
  }

};
