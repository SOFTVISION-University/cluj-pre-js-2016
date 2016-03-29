describe('Playlist Tests', function(){
  var playlist = new Playlist("idTest","titleTest", "imgTest", "aboutTest");

  it('test getId', function(){
      expect(playlist.getId()).toEqual("idTest");
  });

  it('test setId', function(){
      playlist.setId('newId');
      expect(playlist.getId()).toEqual("newId");
  });


  it('test getTitle', function(){
      expect(playlist.getTitle()).toEqual("titleTest");
  });

  it('test setTitle', function(){
      playlist.setTitle('newTitle');
      expect(playlist.getTitle()).toEqual("newTitle");
  });

  it('test getImg', function(){
      expect(playlist.getImg()).toEqual("imgTest");
  });

  it('test setImg', function(){
      playlist.setImg('newImg');
      expect(playlist.getImg()).toEqual("newImg");
  });

  it('test getAbout', function(){
      expect(playlist.getAbout()).toEqual("aboutTest");
  });

  it('test setAbout', function(){
      playlist.setAbout('newAbout');
      expect(playlist.getAbout()).toEqual("newAbout");
  });
});
