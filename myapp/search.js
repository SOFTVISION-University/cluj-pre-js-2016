

function closePlaylist(){
    // document.getElementByClass('playlist').classList.toggle('closed');
    // document.getElementsByClassName('playlist').toggleClass('closed');
    var x = document.getElementById("plyL");
    if( x.style.visibility == 'visible' ){
       x.style.visibility = 'hidden';
     }
}

function toggle(id,playlistNr){
       var obj = document.getElementById(id);
       var button1 = document.getElementById('openB');
       var button2 = document.getElementById('closeB');

       if(obj.style.visibility == 'hidden')
       {
           obj.style.visibility = 'visible';

       } else
        {
            obj.style.visibility = 'visible';
        }
          console.log(playlistNr);
        displaySongs(playlistNr);

}


function removePlaylist(){
  var parent = document.getElementById( 'plyL' );
  while ( document.getElementById('divSong') !== null ){
    var child = document.getElementById( 'divSong' );
    parent.removeChild( child );
  }
}

function transformTime(time){
    var minutes = (time / 60).toFixed(0);
    var seconds = time % 60 ;
    if (seconds < 10) seconds = "0" + seconds;
    return minutes  + ":" + seconds;
}

function displaySongs(index){
    removePlaylist();
    var lengthPlaylist = playlist[index].songs.length;
    var playlistElement = document.getElementById('plyL');

    for( j = 0 ; j < lengthPlaylist ; j++ ){

        var divSong = document.createElement( 'div' );
        var divIdName = 'divSong';
        divSong.setAttribute( 'id', divIdName );
      //  divSong.style = "height:70px;vertical-align:top;border-bottom: 1px solid gray";

      //  divSong.appendChild(document.createElement('p'));
        var img = document.createElement('img');

        // var parag=document.createElement('p');
        // var pIdName='text';
        // parag.setAttribute('id',pIdName);
        // parag.style="display:inline-block;padding-left:5px ";
        divSong.innerHTML = '<img src= "' + playlist[index].songs[j].image + '"/>' + '<p>' + playlist[index].songs[j].songTitle + '</p>' + "        " +" by " + playlist[index].songs[j].songAuthor + "        " + transformTime(playlist[index].songs[j].songLength) + "       " + playlist[index].songs[j].songListened;

        //newdiv.appendChild(parag);
        playlistElement.appendChild( divSong );



    }

}
