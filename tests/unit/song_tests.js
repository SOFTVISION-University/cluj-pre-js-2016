describe('song tests', function() {
    var songObj = {"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82};
    var song;
    beforeEach(function() {
      song = new Song(songObj);
    });
    it('test getSongImage', function() {
        expect(song.getSongImage()).toEqual('../core/assets/2015-best-music.png');
    });
    it('test getSongTitle', function() {
        expect(song.getSongTitle()).toEqual('love love enemies love');
    });
    it('test getSongAuthor', function() {
        expect(song.getSongAuthor()).toEqual('Smiley');
    });
    it('test getSongLength', function() {
        expect(song.getSongLength()).toEqual(74);
    });
    it('test getSongListened', function() {
        expect(song.getSongListened()).toEqual(82);
    });
    it('test setSongImage', function() {
        song.setSongImage('newImage');
        expect(song.getSongImage()).toEqual('newImage');
    });
    it('test setSongTitle', function() {
        song.setSongTitle('newTitle');
        expect(song.getSongTitle()).toEqual('newTitle');
    });
    it('test setSongAuthor', function() {
      song.setSongAuthor('newAuthor');
        expect(song.getSongAuthor()).toEqual('newAuthor');
    });
    it('test setSongLength', function() {
        song.setSongLength(25);
        expect(song.getSongLength()).toEqual(25);
    });
    it('test setSongListened', function() {
        song.setSongListened(100);
        expect(song.getSongListened()).toEqual(100);
    });
});
