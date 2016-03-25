describe('test HappyFLow', function() {
    var obj = { image : "../core/assets/2015-best-music.png",
                songTitle : "cosmin",
                songAuthor : "ionascu",
                songLength : "200",
                songListened : "20",
              };


    var me = new Song(obj);
    it('test image', function() {
        expect(me.image).toEqual('../core/assets/2015-best-music.png');
    });
    it('test songAuthor', function() {
        expect(me.songAuthor).toEqual('ionascu');
    });

    it('test songTitle', function() {
        expect(me.songTitle).toEqual('cosmin');
    });

    it('test songLength', function() {
        expect(me.songLength).toEqual('200');
    });

    it('test songListened', function() {
        expect(me.songListened).toEqual('20');
    });



 it('test getImage', function() {

    expect(me.getImage()).toEqual('../core/assets/2015-best-music.png');
});
it('test getAuthor', function() {

   expect(me.getAuthor()).toEqual('ionascu');
});
it('test getTitle', function() {

   expect(me.getTitle()).toEqual('cosmin');
});
it('test getLength', function() {

   expect(me.getLength()).toEqual('200');
});
it('test getListened', function() {

   expect(me.getListened()).toEqual('20');
});
it('test setImage', function() {
    me.setImage('corina.jpg');
   expect(me.getImage()).toEqual('corina.jpg');
});
it('test setLength', function() {
    me.setLength('100');
   expect(me.getLength()).toEqual('100');
});
it('test setAuthor', function() {
    me.setAuthor('maria');
   expect(me.getAuthor()).toEqual('maria');
});
it('test setTitle', function() {
    me.setTitle('maria');
   expect(me.getTitle()).toEqual('maria');
});
it('test setListened', function() {
    me.setListened('2');
   expect(me.getListened()).toEqual('2');
});

});
