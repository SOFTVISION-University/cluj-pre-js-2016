describe('test HappyFLow', function() {
    var obj = { id : "1",
                title : "cosmin",
                songs : [],
                imageLarge : "200",
                imageSmall : "20",
                description: "abcdefg"
              };


    var me = new Playlist(obj);
    it('test id', function() {
        expect(me.id).toEqual('1');
    });
    it('test title', function() {
        expect(me.title).toEqual('cosmin');
    });

    it('test songs', function() {
        expect(me.songs).toEqual([]);
    });

    it('test imageLarge', function() {
        expect(me.imageLarge).toEqual('200');
    });

    it('test imageSmall', function() {
        expect(me.imageSmall).toEqual('20');
    });
    it('test description', function() {
        expect(me.description).toEqual('abcdefg');
    });



    it('test getId', function() {

      expect(me.getId()).toEqual('1');
    });
    it('test getTitle', function() {
      expect(me.getTitle()).toEqual('cosmin');
    });

    it('test getImageLarge', function() {
      expect(me.getImageLarge()).toEqual('200');
    });

    it('test getImageSmall', function() {
      expect(me.getImageSmall()).toEqual('20');
    });
    it('test getDescription', function() {
      expect(me.getDescription()).toEqual('abcdefg');
    });



    it('test setSong', function() {
      me.setSong(2);
      expect(me.songs).toEqual([2]);
    });

});
