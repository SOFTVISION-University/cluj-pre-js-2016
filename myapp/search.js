

function closePlaylist(){
    // document.getElementByClass('playlist').classList.toggle('closed');
    // document.getElementsByClassName('playlist').toggleClass('closed');
    var x = document.getElementById("plyL");
    if( x.style.visibility == 'visible' ){
       x.style.visibility = 'hidden';
     }
}

function toggle(id){
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
        displaySongs();
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

function displaySongs(){
    removePlaylist();
    var lengthPlaylist = playlist[0].songs.length;
    var playlistElement = document.getElementById('plyL');

    for( j = 0 ; j < lengthPlaylist ; j++ ){

        var divSong = document.createElement( 'div' );
        var divIdName = 'divSong';
        divSong.setAttribute( 'id', divIdName );
        divSong.style = "height:70px;vertical-align:top;border-bottom: 1px solid gray";

        var img = document.createElement('img');

        // var parag=document.createElement('p');
        // var pIdName='text';
        // parag.setAttribute('id',pIdName);
        // parag.style="display:inline-block;padding-left:5px ";
        divSong.innerHTML = '<img src= "' + playlist[0].songs[j].image + '"/>' + playlist[0].songs[j].songTitle + "        " +" by " + playlist[0].songs[j].songAuthor + "        " + transformTime(playlist[0].songs[j].songLength) + "       " + playlist[0].songs[j].songListened;

        //newdiv.appendChild(parag);
        playlistElement.appendChild( divSong );

    //  var img=new Image();
      // img.src= playlist[0].songs[j].image;
      // newdiv.appendChild('img');
     //newdiv.innerHTML='<img src=' + playlist[0].songs[j].image + '/>';
    // newdiv.innerHTML = playlist[0].songs[j].songLength;
    //  newdiv.innerHTML = playlist[0].songs[j].songListened;

    }

}
