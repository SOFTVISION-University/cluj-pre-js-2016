initializePlaylist();

function initializePlaylist(){

    var playlistsParent = document.getElementsByClassName('section-absolute')[0];

    function mapPlaylists(val){
      return renderPlaylist(val,playlistsParent);
    }

    playlistsManager.allPlaylists.map(mapPlaylists);
}

function renderPlaylist(objectToRender,parentObject){

  var smallDiv = document.createElement('div');
  smallDiv.setAttribute("class","individual-playlist");
  parentObject.appendChild(smallDiv);

  smallDiv.innerHTML =
  '<div class="individual-playlist">'+
      ' <div id="individual-playlist-button">'+
          '<img src="../core/assets/play-icon.png">'+
          '<p>Explore Playlist</p>'+
      ' </div> '+
  '<img src="'+ objectToRender.imageLarge +'"> '+
  '<h3>'+objectToRender.title+'</h3>'+
   '<p> '+objectToRender.description+'</p>'+
  '</div>';

  var buttonInPlaylist = smallDiv.getElementsByTagName("div")[0];

  buttonInPlaylist.addEventListener('click', function(){
    renderSpecificPlaylistObjects(objectToRender);
  });
}

// render every playlist given from
function renderSpecificPlaylistObjects(objectToRender) {

  var parentObjectRended = document.getElementById('playlistAbsolut');
  parentObjectRended.style.display = "inline";

  var mapSongs = function(val){

    return renderSong(val);
  };

  var reduceSong = function(memo,val){
    return memo+val;
  };

  parentObjectRended.innerHTML =
  '<div class="playlist-top"><a>CLOSE</a><img src="../core/assets/close-icon.png">'+
'  </div>'+
    ' <div class="playlist-main">'+
    '    <img src="'+ objectToRender.imageSmall+'">' +
      '  <div>'+
        '   <p>Playing from: </p>'+
    '       <h2>'+ objectToRender.title +': The remixes radio</h2>'+
    '    </div>'+
    ' </div>'+
    ' <table class="table_songs">'+
    '    <tr id="headTable">'+
      '     <th>SONGS</th>'+
      '     <th>LENGTH</th>'+
      '     <th>LISTENED</th>'+
      '  </tr>'+
      '  <tr class="tr-second-in-table">'+
            objectToRender.songs.map(mapSongs).reduce(reduceSong,"")+
        '</tr>'+
    ' </table>';

    var closeButton = document.getElementsByClassName('playlist-top')[0];
    closeButton.addEventListener('click',function(){
        parentObjectRended.style.display = "none";
    });
}

function renderSong(song){
   return  ' <tr>' +
              '   <td>'+
                  '  <div class="song-pic-text">'+
                    '   <img src="' + song.image + '">'+
                  '     <div>'+
                        '  <h3>'+song.songTitle+'</h3>'+
                '          <p>by'+song.songAuthor+'</p>'+
              '         </div>'+
              '      </div>'+
              '   </td>'+
              '   <td>'+
                '    <p>'+song.songLength+'</p>'+
                ' </td>'+
              '   <td>'+
                '    <p>'+song.songListened+'</p>'+
                ' </td>'+
            '  </tr>';
}
