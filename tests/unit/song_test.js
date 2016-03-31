describe('test song Class',function() {
  var songObject = {"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82};
  var song = new Song(songObject);
  it('test song get title', function() {
    expect(song.getSongTitle()).toEqual('love love enemies love');
  });
  it('test song get author', function() {
    expect(song.getSongAuthor()).toEqual('Smiley');
  });
  it('test song get image', function() {
    expect(song.getSongImage()).toEqual('../core/assets/2015-best-music.png');
  });
  it('test song get duration', function() {
    expect(song.getSongDuration()).toEqual(74);
  });
  it('test song get count', function() {
    expect(song.getSongCount()).toBe(82);
  });
  it('test song set title', function() {
    song.setSongTitle('titlu nou');
    expect(song.songName).toEqual("titlu nou");
  });
  it('test song set author', function() {
    song.setSongAuthor('titlu nou');
    expect(song.artistName).toEqual("titlu nou");
  });
  it('test song set image', function() {
    song.setSongImage(12);
    expect(song.image).toEqual(12);
  });
  it('test song set duration', function() {
    song.setSongDuration('titlu nou');
    expect(song.duration).toEqual("titlu nou");
  });
  it('test song set count', function() {
    song.setSongCount('titlu nou');
    expect(song.count).toEqual("titlu nou");
  });
});
