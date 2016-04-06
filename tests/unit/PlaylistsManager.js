describe('Playlist tests', function(){

var objSong1 = {};
objSong1.image = "objectSong.image;";
objSong1.songTitle ="bjectSong.songTitle";
objSong1.songAuthor = "objectSong.songAuthor";
objSong1.songLength = "objectSong.songLength";
objSong1.songListened = "objectSong.songListened";
 var song1 = new Song(objSong1);

 var objSong2 = {};

 objSong2.image = "Song Pushed";
 objSong2.songTitle ="Song Pushed";
 objSong2.songAuthor = "Song Pushed";
 objSong2.songLength = "Song Pushed";
 objSong2.songListened = "Song Pushed";

 var Song2 = new Song(objSong2);

var objectSingleTest = {};

  objectSingleTest.id = "1";
  objectSingleTest.title = "objectPlaylist.title;";
  objectSingleTest.description = "objectPlaylist.description;";
  objectSingleTest.imageLarge =" objectPlaylist.imageLarge;";
  objectSingleTest.imageSmall = "objectPlaylist.imageSmall;";
  objectSingleTest.songs = [song1];

  var singlePlaylist =   new Playlist(objectSingleTest);

  var playlistManagerTest = new PlaylistsManager();

  it('Should return a songs length bigger with 1 if AddSong is called', function(){
    var count = singlePlaylist.songs.length;
    singlePlaylist.addSong(Song2);
    expect(singlePlaylist.songs.length).toEqual(count +1);
  });

  it('Should return a playlist length bigger with 1 if addPlaylist is called', function(){
    var count = playlistManagerTest.allPlaylists.length;
    playlistManagerTest.addPlaylist(singlePlaylist);
    expect(playlistManagerTest.allPlaylists.length).toEqual(count +1);

  });

});
