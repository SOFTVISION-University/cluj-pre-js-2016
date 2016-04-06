describe('test transformInMinutes', function() {
  it('test transmorm', function() {
      expect(transformInMinutes(125)).toEqual("2:5");
  });

  it('test transmorm', function() {
      expect(transformInMinutes(145)).not.toEqual("2:5");
  });
});


describe('test Song', function() {

       var song = {
         image : 'imagePlaylist',
         author : 'Anonim',
        title : 'song1',
        length : 12,
        listened : 5
     };


     it('test image', function() {
         expect(song.image).toEqual('imagePlaylist');
     });
     it('test author', function() {
         expect(song.author).toEqual('Anonim');
     });
     it('test title', function() {
         expect(song.title).toEqual('song1');
     });
     it('test length', function() {
         expect(song.length).toEqual(12);
     });
     it('test listened', function() {
         expect(song.listened).toEqual(5);
     });


     });
