describe('Playlist.js tests', function() {
    describe('test function Playlist to creat playlists', function() {
        var playlist = new Playlist(1, 'title1', '../src/a.png', '../src/aBig.png', 'song1', 'description1');

        it('test the id', function() {
            expect(playlist.id).toEqual(1);
        });
        it('test the title', function() {
            expect(playlist.title).toEqual('title1');
        });
        it('test the imgSmall', function() {
            expect(playlist.imgSmall).toEqual('../src/a.png');
        });
        it('test the imgBig', function() {
            expect(playlist.imgBig).toEqual('../src/aBig.png');
        });
        it('test the songs', function() {
            expect(playlist.songs).toEqual('song1');
        });
        it('test the description', function() {
            expect(playlist.description).toEqual('description1');
        });
    });

    describe('test getters', function() {
        var playlist = new Playlist(1, 'title1', '../src/a.png', '../src/aBig.png', 'song1', 'description1');

        it('test getId', function() {
            expect(playlist.getId()).toEqual(1);
        });
        it('test getTitle', function() {
            expect(playlist.getTitle()).toEqual('title1');
        });
        it('test getImgSmall', function() {
            expect(playlist.getImgSmall()).toEqual('../src/a.png');
        });
        it('test getImgBig', function() {
            expect(playlist.getImgBig()).toEqual('../src/aBig.png');
        });
        it('test getSongs', function() {
            expect(playlist.getSongs()).toEqual('song1');
        });
        it('test getDescription', function() {
            expect(playlist.getDescription()).toEqual('description1');
        });
    });

    xdescribe('test setters', function() {
        var playlist = new Playlist(1, 'title1', '../src/a.png', '../src/aBig.png', 'song1', 'description1');

        it('test getId', function() {
            playlist.setId(2);
            expect(playlist.username).toEqual(2);
        });
        it('test setTitle', function() {
            playlist.setTitle('title2');
            expect(playlist.email).toEqual('title2');
        });
        it('test setImgSmall', function() {
            playlist.setImgSmall('../src/b.png');
            expect(playlist.password).toEqual('../src/b.png');
        });
        it('test setImgBig', function() {
            playlist.setImgBig('../src/bBig.png');
            expect(playlist.logged).toEqual('../src/bBig.png');
        });
        it('test setSongs', function() {
            playlist.setSongs('song2');
            expect(playlist.password).toEqual('song2');
        });
        it('test setDescription', function() {
            playlist.setDescription('description2');
            expect(playlist.logged).toEqual('description2');
        });
    });



});
