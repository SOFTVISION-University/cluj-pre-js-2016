it('test get playlist song', function() {
  expect(getPlaylistSongs({songs:"songtest"})).toEqual("songtest");
});

it('test concat memo and val', function() {
  expect(concatSongsArray([1,2],[2,3])).toEqual([1,2,2,3]);
});

it('test get songtitle', function() {
  expect(getSongTitles({ceva:"adsa",songTitle:"song title test"})).toEqual("song title test");
});
