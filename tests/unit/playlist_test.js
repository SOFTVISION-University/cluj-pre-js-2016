describe('test song Class',function() {
  var playlistObject = {"id":0,
                      "title":"Playlist 1",
                      "songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"ea money enemies enemies","songAuthor":"Dr. Dre","songLength":325,"songListened":13}],
                      "imageLarge":"../core/assets/up-all-night.png",
                      "imageSmall":"../core/assets/up-all-night-small.png",
                      "description":"Culpa ipsum"};
  var playlist = new Playlist(playlistObject);
  it('test playlist get title', function() {
    expect(playlist.getPlaylistName()).toEqual('Playlist 1');
  });

  it('test playlist register an observer', function() {
    playlist.register({o:1});
    expect(playlist.observers).toEqual([{o:1}]);
  });

  it('test playlist get imageLarge', function() {
    expect(playlist.getPlaylistImageLarge()).toEqual('../core/assets/up-all-night.png');
  });
  it('test playlist get imageSmall', function() {
    expect(playlist.getPlaylistImageSmall()).toEqual('../core/assets/up-all-night-small.png');
  });
  it('test playlist get description', function() {
    expect(playlist.getPlaylistDescription()).toEqual('Culpa ipsum');
  });
  it('test playlist get songlist', function() {
    expect(playlist.getPlaylistSongslist()).toEqual([]);
  });
  it('test set Playlist Name', function() {
    playlist.setPlaylistName('title new');
    expect(playlist.playlistName).toEqual("title new");
  });
  it('test set PlaylistImageSmall', function() {
    playlist.setPlaylistImageSmall('new img small');
    expect(playlist.imageSmall).toEqual("new img small");
  });
  it('test set setPlaylistImageLarge', function() {
    playlist.setPlaylistImageLarge('new img large');
    expect(playlist.imageLarge).toEqual("new img large");
  });
  it('test set setPlaylistDescription', function() {
    playlist.setPlaylistDescription('new play desc');
    expect(playlist.description).toEqual("new play desc");
  });
  it('test set songs list', function() {
    playlist.setPlaylistSongslist([1,2,3,4]);
    expect(playlist.songsList).toEqual([1,2,3,4]);
  });
});
