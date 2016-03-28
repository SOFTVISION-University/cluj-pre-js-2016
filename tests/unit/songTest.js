it("The 'toMatch' matcher is for regular expressions", function() {
    var message = "foo bar baz";

    expect(message).toMatch(/bar/);
    expect(message).toMatch("bar");
    expect(message).not.toMatch(/quux/);
  });

  it("The 'toBeDefined' matcher compares against `undefined`", function() {
    var a = {
      foo: "foo"
    };

    expect(a.foo).toBeDefined();
    expect(a.bar).not.toBeDefined();
  });

  it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
    var a, foo = "foo";

    expect(foo).toBeTruthy();
    expect(a).not.toBeTruthy();
  });



xit('Test 1', function(){
  var currentPlaylist = new Playlist(playlistFromParse[0]);
  console.log(currentPlaylist);
  expect(currentPlaylist.title).toEqaul("Playlist 1");
});


xit('Test 2', function(){
  var song = new Song("../core/assets/2015-best-music.png", "love love enemies love", "Smiley", 74, 82);
  expect(this.image).toEqual(path.image);
  expect(this.songTitle).toEqual(path.songTitle);
  expect(this.songAuthor).toEqual(path.songAuthor);
  expect(this.songLength).toEqual(path.songLength);
  expect(this.songListened).toEqual(path.songListened);

});

xit('Test 3', function(){
  var songObject = {"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82};
  var song = new Song(songObject);
  expect(song.image).toEqual("../core/assets/2015-best-music.png");
  expect(song.songTitle).toEqual("love love enemies love");
  expect(song.songAuthor).toEqual("Smiley");
  expect(song.songLength).toEqual(74);
  expect(song.songListened).toEqual(82);
});

xdescribe('Test 4', function(){
  var song;
  beforeEach(function(){
    song = new Song({"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82});
  });
xit('Test 4.1', function(){
    console.log(song);
     expect(song.getImage()).toEqual(song.image);
     expect(song.getImage()).toBeUndefined();
   });
  xit('Test 4.2', function(){
    expect(song.getSongTitle()).toEqual(song.songTitle);
  });

   xit('Test 4.3', function(){
     expect(song.getSongAuthor()).toEqual(song.songAuthor);
   });
   xit('Test 4.4', function(){
     expect(song.getSongLength()).toEqual(song.songLength);
   });
   xit('Test 4.5', function(){
     expect(song.getSongListened()).toEqual(song.songListened);
   });
});
