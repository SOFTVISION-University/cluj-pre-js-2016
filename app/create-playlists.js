const list = JSON.parse(playlistsJSON);
let i = undefined;

function createPlaylist() {

  const currentPlaylist = new Playlist(list[0]);
  const newDiv = document.createElement('div');
  newDiv.id = 'new';
  newDiv.style.height = '200px';
  newDiv.style.width = '200px';
  newDiv.style.backgroundColor = 'blue';
  document.getElementById('new').appendChild('newDiv');

  const currentPlaylistsongs = currentPlaylist.songs.map(function (data) {
    return new Song(data.image, data.songTitle, data.songAuthor,
       data.songAuthor, data.songListened);
  });

  for (i = 0; i < currentPlaylistsongs.length ; i++) {
    const song = currentPlaylistsongs[i];
    const image = document.createElement('div');
    image.innerHTML = '<img src="' + song.getImage() + '"/>';
    innerDiv.appendChild(image);

    const songTitle = document.createElement('div');
    songTitle.innerText = song.getSongTitle();
    innerDiv.appendChild(songTitle);

    const songAuthor = document.createElement('div');
    songAuthor.innerText = song.getSongAuthor();
    innerDiv.appendChild(songAuthor);

    const songLength = document.createElement('div');
    songLength.innerText = convertSecToMin(song.getSongLength());
    innerDiv.appendChild(songLength);

    const songListened = document.createElement('div');
    songListened.innerText = song.getSongListened();
    innerDiv.appendChild(songListened);
  }
}
