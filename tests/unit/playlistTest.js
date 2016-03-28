describe('Test 6', function(){
  var playlist;
  beforeEach(function(){
    playlist = new Playlist({"id":0,
     "title":"Playlist 1",
     "songs":[
        {
           "image":"../core/assets/2015-best-music.png",
           "songTitle":"love love enemies love",
           "songAuthor":"Smiley",
           "songLength":74,
           "songListened":82
        }
     ],
     "imageLarge":"../core/assets/up-all-night.png",
     "imageSmall":"../core/assets/up-all-night-small.png",
     "description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."
  });
it('Test 6.1', function(){

     expect(playlist.getId()).toEqual(playlist.id);
     expect(playlist.getId()).toBeUndefined();
   });
it('Test 6.2', function(){
    expect(playlist.getTitle()).toEqual(playlist.title);
    expect(playlist.getTitle()).toBeUndefined();
  });

 it('Test 6.3', function(){
      expect(playlist.getSong(0)).toEqual(playlist.song[0]);
      expect(playlist.getSong()).toBeUndefined();
    });
});
});
