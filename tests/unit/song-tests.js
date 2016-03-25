describe('song tests', function(){
  var songObject = {"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82} ;
  var song;
  beforeEach(function() {
      song = new Song(songObject);
  });
  it('song getImage', function(){
      expect(song.getImage()).toEqual("../core/assets/2015-best-music.png");
  });
  it('song setImage', function(){
      song.setImage('../core/assets/2015-best-music.png');
      expect(song.getImage()).toEqual("../core/assets/2015-best-music.png");
  });
  it('song getSongTitle', function(){
      expect(song.getSongTitle()).toEqual("love love enemies love");
  });
  it('song setSongTitle', function(){
      song.setSongTitle('love love enemies love');
      expect(song.getSongTitle()).toEqual("love love enemies love");
  });
  it('song getSongAuthor', function(){
      expect(song.getSongAuthor()).toEqual("Smiley");
  });
  it('song setSongAuthor', function(){
      song.setSongAuthor('Smiley');
      expect(song.getSongAuthor()).toEqual("Smiley");
  });
  it('song getSongLength', function(){
      expect(song.getSongLength()).toEqual(74);
  });
  it('song setSongLength', function(){
      song.setSongLength(74);
      expect(song.getSongLength()).toEqual(74);
  });
  it('song getSongListened', function(){
      expect(song.getSongListened()).toEqual(82);
  });
  it('song setSongListened', function(){
      song.setSongListened(82);
      expect(song.getSongListened()).toEqual(82);
  });
});
