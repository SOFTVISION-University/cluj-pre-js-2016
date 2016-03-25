
describe('test Song', function() {
        var listJSON = {"id":0,"title":"Playlist 1","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82},{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies pierdut","songAuthor":"Dr. Dre","songLength":186,"songListened":78},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money pierdut ea","songAuthor":"Andra","songLength":303,"songListened":94},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies el buletin ea","songAuthor":"Andra","songLength":359,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin el buletin love","songAuthor":"Eminem","songLength":312,"songListened":11},{"image":"../core/assets/2015-best-music.png","songTitle":"pierdut pierdut enemies ea","songAuthor":"Eminem","songLength":37,"songListened":9},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money enemies enemies","songAuthor":"Dr. Dre","songLength":325,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money el money","songAuthor":"Eminem","songLength":58,"songListened":10}],"imageLarge":"../core/assets/up-all-night.png","imageSmall":"../core/assets/up-all-night-small.png","description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."};
        var playlistTest=new Playlist(listJSON);
        it('test id', function() {
            expect(playlistTest.id).toEqual(0);
        });
        it('test songtitle', function() {
            expect(playlistTest.songs[0].songTitle).toEqual('love love enemies love');
        });
        it('test setPlaylitstId', function(){
            playlistTest.setId("2");
            expect(playlistTest.id).toEqual('2');
        });
        it('test getPlaylistId', function(){
            expect(playlistTest.getId()).toEqual('2');
        });
        it('test setPlaylitstTitle', function(){
            playlistTest.setTitle("titlul2");
            expect(playlistTest.title).toEqual('titlul2');
        });
        it('test getPlaylistTitle', function(){
            expect(playlistTest.getTitle()).toEqual('titlul2');
        });
});
