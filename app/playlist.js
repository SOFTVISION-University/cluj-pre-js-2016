function Login(){
  window.location.href="account_signin.html";
}

var playlists = JSON.parse(playlistsJSON);

function Pop_Up(){
  document.getElementById('play').style.transition= "all 0.5s";
  document.getElementById('play').style.visibility= "visible";
  document.getElementById('play').style.height = "500px";
  //console.log(JSONparse); //parsare si afisare pe consola
  //console.log(usersJSON);}

var currentPlaylist = new Playlist(playlists[0]);//creare playlistul meu curent

var iDiv= document.createElement('div');
  iDiv.id="play1";
  document.getElementById('play').appendChild(iDiv);

for (var i = 0; i < playlists[0].songs.length; i++) {
  var song = new Song(playlists[0].songs[i]);
}

for( var i=0; i< currentPlaylist.songList.length; i++){

          var contentDiv = document.createElement('div');
          contentDiv.id = 'div_song';
          contentDiv.style.width= "500px";
          contentDiv.style.height="100px";
          iDiv.appendChild(contentDiv);

          var song = currentPlaylist.songList[i];

      //   console.log('222',currentPlaylist.songList[i]);

          var image = document.createElement('img');
          image.style.width="50px";
          image.style.height="50px";
          image.backgroundImage= "url('"+song.getimage()+"')";
          image.src=song.getimage();
          contentDiv.appendChild(image);

          var title = document.createElement('span');
          title.innerText= song.getSongTitle();
          contentDiv.appendChild(title);

          var artist = document.createElement('div');
          artist.innerText= song.getSongAuthor();
          contentDiv.appendChild(artist);

          var length = document.createElement('div');
          length.innerText= song.getSongLength();
          contentDiv.appendChild(length);

          var listened = document.createElement('div');
          listened.innerText= song.getSongListened();
          contentDiv.appendChild(listened);
      }
    }
