describe('Playlist Tests', function(){
  var playlist = new Playlist("idTest","titleTest", "imgTest", "aboutTest");

  it('test getId', function(){
      expect(playlist.getId()).toEqual("idTest");
  });

  it('test setId', function(){
      playlist.setTitle('newId');
      expect(playlist.getId()).toEqual("idTest");
  });


  it('test getTitle', function(){
      expect(playlist.getId()).toEqual("titleTest");
  });

  it('test setTitle', function(){
      playlist.setTitle('newTitle');
      expect(playlist.getTitle()).toEqual("newTitle");
  });

  it('test getImg', function(){
      expect(playlist.getImg()).toEqual("imgTest");
  });

  it('test setImg', function(){
      playlist.setTitle('newImg');
      expect(playlist.getImg()).toEqual("newImg");
  });

  it('test getAbout', function(){
      expect(playlist.getAbout()).toEqual("aboutTest");
  });

  it('test setAbout', function(){
      playlist.setTitle('newAbout');
      expect(playlist.getImg()).toEqual("newAbout");
  });
});







it('user getName', function(){
    expect(user.getUserName()).toEqual("testName");
});

it('user setName', function(){
    user.setName('newName');
    expect(user.getId()).toEqual("testName");
});


it('user getEmail', function(){
    expect(user.getEmail()).toEqual("testEmail");
});

it('user setEmail', function(){
    user.setEmail('newEmail');
    expect(user.getEmail()).toEqual("testEmail");
});

it('user getPassword', function(){
    expect(user.getPassword()).toEqual("testPassword");
});

it('user setPassword', function(){
    user.setPassword('newPassword');
    expect(user.getPassword()).toEqual("testPassword");
});
});
