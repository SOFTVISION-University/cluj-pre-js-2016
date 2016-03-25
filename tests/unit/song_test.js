describe('test Song', function() {
        var init = {
          image : "../core/assets/2015-best-music.png",
          songTitle : "titlu",
          songAuthor : "autor",
          songLength : "23",
          songListened : "10"
        };
        var songTest=new Song(init);
        it('test length', function() {
            expect(songTest.songLength).toEqual('23');
        });
        it('test title', function() {
            expect(songTest.songTitle).toEqual('titlu');
        });
        it('test setTitle', function(){
            songTest.setTitle("titlul2");
            expect(songTest.songTitle).toEqual('titlul2');
        });
        it('test getTitle', function(){
            expect(songTest.getTitle()).toEqual('titlul2');
        });
});
