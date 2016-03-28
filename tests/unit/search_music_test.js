describe('test HappyFLow', function() {
    var obj = { songs : ['cosmin'],
                songTitle : "Ferrero",
                };


    var me = new SearchMusic();

    it('test getSongList', function() {
        expect(getSongList(obj)).toEqual(['cosmin']);
    });
    it('test getSongTitle', function() {
        expect(getSongTitle(obj)).toEqual('Ferrero');
    });
    it('test reduceSongList', function() {
        expect(reduceSongList([1],[2])).toEqual([1,2]);
    });

  /*  it('test PopulateSearchList', function() {




      expect(me.PopulateSearchList()).toEqual(['Ferrero','cosmin']);
      expect(getSongList).toHaveBeenCalled();
      expect(getSongTitle).toHaveBeenCalled();
      expect(reduceSongList).toHaveBeenCalled();
    });*/


  });
