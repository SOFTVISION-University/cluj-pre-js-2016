describe('song tests', function() {
    var songObj = {"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82};
    var song;
    beforeEach(function() {
      this.song = new Song(songObj);
    });
    it('test getSongImage', function() {
        expect(this.song.getSongImage()).toEqual('../core/assets/2015-best-music.png');
    });
    it('test getSongTitle', function() {
        expect(this.song.getSongTitle()).toEqual('love love enemies love');
    });
    it('test getSongAuthor', function() {
        expect(this.song.getSongAuthor()).toEqual('Smiley');
    });
    it('test getSongLength', function() {
        expect(this.song.getSongLength()).toEqual(74);
    });
    it('test getSongListened', function() {
        expect(this.song.getSongListened()).toEqual(82);
    });
    it('test setSongImage', function() {
        this.song.setSongImage('newImage');
        expect(this.song.getSongImage()).toEqual('newImage');
    });
    it('test setSongTitle', function() {
        this.song.setSongTitle('newTitle');
        expect(this.song.getSongTitle()).toEqual('newTitle');
    });
    it('test setSongAuthor', function() {
      this.song.setSongAuthor('newAuthor');
        expect(this.song.getSongAuthor()).toEqual('newAuthor');
    });
    it('test setSongLength', function() {
        this.song.setSongLength(25);
        expect(this.song.getSongLength()).toEqual(25);
    });
    it('test setSongListened', function() {
        this.song.setSongListened(100);
        expect(this.song.getSongListened()).toEqual(100);
    });
});
