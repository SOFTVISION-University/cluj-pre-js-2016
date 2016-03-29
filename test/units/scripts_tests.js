

describe('scripts tests', function() {

//SONG

      it('Test search for image', function() {
      var songObj ={"image":"../core/assets/2015-best-music.png",
       "songTitle":"love love enemies love", "songAuthor":"Smiley", "songLength":"74", "songListened":"82"};
      var song = new Song(songObj);
      expect(song.image).toEqual("../core/assets/2015-best-music.png");

    });

      it('Test search for title', function() {
      var songObj ={"image":"../core/assets/2015-best-music.png",
       "songTitle":"love love enemies love", "songAuthor":"Smiley", "songLength":"74", "songListened":"82"};
      var song = new Song(songObj);
      expect(song.title).toEqual("love love enemies love");

    });

      it('Test search for artist', function() {
      var songObj ={"image":"../core/assets/2015-best-music.png",
      "songTitle":"love love enemies love", "songAuthor":"Smiley", "songLength":"74", "songListened":"82"};
      var song = new Song(songObj);
      expect(song.artist).toEqual("Smiley");

    });

    it('Test search for length', function() {
    var songObj ={"image":"../core/assets/2015-best-music.png",
    "songTitle":"love love enemies love", "songAuthor":"Smiley", "songLength":"74", "songListened":"82"};
    var song = new Song(songObj);
    expect(song.length).toEqual("74");

    });

    it('Test search for nr.listened', function() {
    var songObj ={"image":"../core/assets/2015-best-music.png",
    "songTitle":"love love enemies love", "songAuthor":"Smiley", "songLength":"74", "songListened":"82"};
    var song = new Song(songObj);
    expect(song.listened).toEqual("82");

    });

//USERS

    it('Test search for user', function(){
    var userObject = {"userName":"combs",
    "email":"kathycombs@quailcom.com", "password":"orkman5951"};
    var userTest=  new User(userObject);
    expect(userTest.name= "combs");

  });

    it('Test search for email', function(){
    var userObject = {"userName":"combs",
    "email":"kathycombs@quailcom.com", "password":"orkman5951"};
    var userTest=  new User(userObject);
    expect(userTest.email= "kathycombs@quailcom.com");

  });

  it('Test search for password', function(){
  var userObject = {"userName":"combs",
  "email":"kathycombs@quailcom.com", "password":"orkman5951"};
  var userTest=  new User(userObject);
  expect(userTest.password= "orkman5951");
  });

//USERS get set

  it('Test set name', function(){
  var userObject = {"userName":"new_user","email":"test@yahoo.com", "password":"5951"};
  var userTest= new User(userObject);
  userTest.setUsername('new_user');
    except(userTest.getUsername().toEqual("new_user"));
  });

  it('Test set email', function(){
  var userObject = {"userName":"new_user","email":"test@yahoo.com", "password":"5951"};
  var userTest= new User(userObject);
  userTest.setUsername('test@yahoo.com');
    except(userTest.getUsername().toEqual("test@yahoo.com"));
  });

  it('Test set password', function(){
  var userObject = {"userName":"new_user","email":"test@yahoo.com", "password":"5951"};
  var userTest= new User(userObject);
  userTest.setUsername('5951');
    except(userTest.getUsername().toEqual("5951"));
  });



});
