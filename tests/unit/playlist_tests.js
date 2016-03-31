describe('playlist tests', function() {
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
    var playlist;
    beforeEach(function() {
      playlist = new Playlist(playlistObj);
    });
    it('test getPlaylistId', function() {
        expect(playlist.getPlaylistId()).toEqual(0);
    });
    it('test getPlaylistTitle', function() {
        expect(playlist.getPlaylistTitle()).toEqual('Playlist 1');
    });
    it('test getPlaylistSongs', function() {
        expect(playlist.getPlaylistSongs()).toEqual([{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82},{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies pierdut","songAuthor":"Dr. Dre","songLength":186,"songListened":78}]);
    });
    it('test getPlaylistLarge', function() {
        expect(playlist.getPlaylistLarge()).toEqual("../core/assets/up-all-night.png");
    });
    it('test getPlaylistSmall', function() {
        expect(playlist.getPlaylistSmall()).toEqual("../core/assets/up-all-night-small.png");
    });
    it('test getPlaylistDescription', function() {
        expect(playlist.getPlaylistDescription()).toEqual("Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad.");
    });
    it('test setPlayListId', function() {
        playlist.setPlaylistId(2);
        expect(playlist.getPlaylistId()).toEqual(2);
    });
    it('test setPlaylistTitle', function() {
        playlist.setPlaylistTitle('newTitle');
        expect(playlist.getPlaylistTitle()).toEqual('newTitle');
    });
    it('test setPlayListLarge', function() {
      playlist.setPlaylistLarge('newLarge');
        expect(playlist.getPlaylistLarge()).toEqual('newLarge');
    });
    it('test setPlayListSmall', function() {
        playlist.setPlaylistSmall('newSmall');
        expect(playlist.getPlaylistSmall()).toEqual('newSmall');
    });
    it('test setPlayListDescription', function() {
        playlist.setPlaylistDescription('newDescription');
        expect(playlist.getPlaylistDescription()).toEqual('newDescription');
    });
});
