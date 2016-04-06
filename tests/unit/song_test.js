describe('Song Tests', function(){
  var song = new Song("imageTest","songTitleTest","songAuthorTest","songLengthTest","songListenedTest");

  it('test imageTest', function(){
      expect(song.getImage()).toEqual("imageTest");
  });

  it('test imageTest', function(){
      song.setImage('newImage');
      expect(song.getImage()).toEqual("newImage");
  });

  it('test songTitleTest', function(){
      expect(song.getSongTitle()).toEqual("songTitleTest");
  });

  it('test songTitleTest', function(){
      song.setSongTitle('newSongTitle');
      expect(song.getSongTitle()).toEqual("newSongTitle");
  });

  it('test songAuthorTest', function(){
      expect(song.getSongAuthor()).toEqual("songAuthorTest");
  });

  it('test songAuthorTest', function(){
      song.setSongAuthor('newSongAuthor');
      expect(song.getSongAuthor()).toEqual("newSongAuthor");
  });

  it('test songLengthTest', function(){
      expect(song.getSongLength()).toEqual("songLengthTest");
  });

  it('test songLengthTest', function(){
      song.setSongLength('newSongLength');
      expect(song.getSongLength()).toEqual("newSongLength");
  });

  it('test songListenedTest', function(){
      expect(song.getSongListened()).toEqual("songListenedTest");
  });

  it('test songListenedTest', function(){
      song.setSongListened('newSongListened');
      expect(song.getSongListened()).toEqual("newSongListened");
  });

});
