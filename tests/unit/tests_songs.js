describe('Song Tests', function(){
  var song = new Song("titluTest", "authorTest", "pathTest", "lengthTest");

  it('test getTitle', function(){
      expect(song.getTitle()).toEqual("titluTest");
  });
  it('test setTitle', function(){
      song.setTitle('changedTitle');
      expect(song.getTitle()).toEqual("changedTitle");
  });

  it('test author', function(){
      expect(song.getAuthor()).toEqual("authorTest");
  });

  it('test setauthor', function(){
      song.setAuthor('newTitle');
      expect(song.getAuthor()).toEqual("newTitle");
  });

  it('test path', function(){
      expect(song.getImagePath()).toEqual("pathTest");
  });

  it('test setImagePath', function(){
      song.setImagePath('newPath');
      expect(song.getImagePath()).toEqual("newPath");
  });

  it('test length', function(){
      expect(song.getLength()).toEqual("lengthTest");
  });

  it('test setLength', function(){
      song.setLength('newLength');
      expect(song.getLength()).toEqual("newLength");
  });

  it('test playcount', function(){
      expect(song.getPlayCount()).toEqual(0);
  });

  it('test setPlayCount', function(){
      song.setPlayCount(22);
      expect(song.getPlayCount()).toEqual(22);
  });

  it('test increasePlayCount', function(){
      song.increasePlayCount();
      expect(song.getPlayCount()).toEqual(23);
  });


});
