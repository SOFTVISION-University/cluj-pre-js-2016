describe('playlist tests', function(){
  var playlistObject = {
    "id":0 ,
    "title":"Playlist 1",
    "songs":{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82},
    "imageLarge":"../core/assets/up-all-night.png",
    "imageSmall":"../core/assets/up-all-night-small.png",
    "description":"Culpa ipsum..."
  } ;
  var playlist;
  beforeEach(function() {
      playlist = new Playlist(playlistObject);
  });
  it('playlist getId', function(){
      expect(playlist.getId()).toEqual(0);
  });
  it('playlist setId', function(){
      playlist.setId(0);
      expect(playlist.getId()).toEqual(0);
  });
  it('playlist getTitle', function(){
      expect(playlist.getTitle()).toEqual('Playlist 1');
  });
  it('playlist setTitle', function(){
      playlist.setTitle('Playlist 1');
      expect(playlist.getTitle()).toEqual('Playlist 1');
  });
  it('playlist getSongs', function(){
      expect(playlist.getSongs()).toEqual({"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82});
  });
  it('playlist setSongs', function(){
      playlist.setSongs({"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82});
      expect(playlist.getSongs()).toEqual({"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82});
  });
  it('playlist getImageLarge', function(){
      expect(playlist.getImageLarge()).toEqual('../core/assets/up-all-night.png');
  });
  it('playlist setImageLarge', function(){
      playlist.setImageLarge('../core/assets/up-all-night.png');
      expect(playlist.getImageLarge()).toEqual('../core/assets/up-all-night.png');
  });

  it('playlist getImageSmall', function(){
      expect(playlist.getImageSmall()).toEqual('../core/assets/up-all-night-small.png');
  });
  it('playlist setImageSmall', function(){
      playlist.setImageSmall('../core/assets/up-all-night-small.png');
      expect(playlist.getImageSmall()).toEqual('../core/assets/up-all-night-small.png');
  });
  it('playlist getDescription', function(){
      expect(playlist.getDescription()).toEqual('Culpa ipsum...');
  });
  it('playlist setDescription', function(){
      playlist.setDescription('Culpa ipsum...');
      expect(playlist.getDescription()).toEqual('Culpa ipsum...');
  });
});
