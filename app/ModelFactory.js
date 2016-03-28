var ModelFactory = {
  create: function(name, data) {
    var ignCaseName = name.toLowerCase();
    switch (ignCaseName) {
      case 'song':
        return new Song(data.songTitle, data.songAuthor, data.image, data.songLength);
      case 'playlist':
        return new Playlist(data.id, data.title, data.description, data.image);
      case 'user':
        return new User(data.userName, data.email, data.password);
      default:
        console.log("no such class");
    }
  }
};
