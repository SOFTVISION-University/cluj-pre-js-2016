describe('test factory', function() {
    var songObj = {"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82};
    var playlistObj = {
      "id":0,
      "title":"Playlist 1",
      "songs":[
      {"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82},
      {"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies pierdut","songAuthor":"Dr. Dre","songLength":186,"songListened":78}
      ],
      "imageLarge":"../core/assets/up-all-night.png",
      "imageSmall":"../core/assets/up-all-night-small.png",
      "description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."
    };
    song = new Song(songObj);
    playlist = new Playlist(playlistObj);

    it('test with Playlist', function() {
        expect(ModelFactory.create('Playlist',playlistObj)).toEqual(playlist);
    });
    it('test with Song', function() {
        expect(ModelFactory.create('Song',songObj)).toEqual(song);
    });
    it('test with other value', function() {
        expect(ModelFactory.create('Podcast',songObj)).toEqual(undefined);
    });
    it('test constructor function ModelFactory', function() {
        var factory = ModelFactory();
        expect(factory).toBe(undefined);
    });
});
