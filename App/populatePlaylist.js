var playlistFromParse = JSON.parse(playlistsJSON);


function unhidePlaylist(){

    document.getElementById("playlist").style.visibility = "visible";
    console.log(currentPlaylist);


        var iDiv = document.createElement('div');
        iDiv.id = 'content';
        document.getElementById('content').appendChild(iDiv);


    //create header
      for(var i = 0; i < currentPlaylist.songs.length; i++){

          var innerDiv = document.createElement('div');
          innerDiv.id = 'divSong';

          innerDiv.style.width="600px";
          innerDiv.style.height="100px";
          innerDiv.style.backgroundColor= "white";
          iDiv.appendChild(innerDiv);
          var song = new Song(currentPlaylist.songs[i]);

        function drawSongImage(){
          var image = document.createElement('div');
          image.innerHTML = '<img src="'+song.getImage()+'"/>';
          innerDiv.appendChild(image);
        }
        drawSongImage();

        function drawSongTitle(){
          var title = document.createElement('div');
          title.innerText = song.getSongTitle();
          innerDiv.appendChild(title);
        }
        drawSongTitle();

        function drawSongAuthor(){
          var author = document.createElement('div');
          author.innerText = song.getSongAuthor();
          innerDiv.appendChild(author);
        }
        drawSongAuthor();

        function drawSongLength(){
          var length = document.createElement('div');
          length.innerText = song.getSongLength();
          innerDiv.appendChild(length);
        }
        drawSongLength();

        function drawSongListened(){
          var listened = document.createElement('div');
          listened.innerText = song.getSongListened();
          innerDiv.appendChild(listened);
        }
        drawSongListened();

        }

}


function closePlaylist(){
    document.getElementById("playlist").style.visibility = "hidden";
}










// function Song(){
//   console.log('!!!');
//   this.image = image;
//   this.songTitle = songTitle;
//   this.songAuthor = songAuthor;
//   this.songLength = songLength;
//   this.songListened = songListened;
//
// };


/*function Playlist(){
  this.playlist = ;
  this.songsArray = songs[i];
}*/
