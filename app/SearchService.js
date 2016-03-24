var numberOfSongsOfList0 = collectionPlaylistObjects[0].songs.length;
var numberOfSongsOfList1 = collectionPlaylistObjects[1].songs.length;
var numberOfSongsOfList2 = collectionPlaylistObjects[2].songs.length;

 function showHidePlaylist(id) {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
 }


 function generatePlaylist(idOfPlaylist){
   var songsOfSpecificPlaylist;
   var iDiv = document.createElement('div');
   iDiv.id = 'playlist-container';
   iDiv.style.cssText = 'position : fixed; background-color : lightblue; height : 680px; width: 470px; margin-left : 50px; margin-top : -620px; overflow-y : scroll;';
   document.body.appendChild(iDiv);

   switch (idOfPlaylist) {
    case 0:
        songsOfSpecificPlaylist = collectionSongObjects.slice(0, numberOfSongsOfList0);
        break;
    case 1:
        songsOfSpecificPlaylist = collectionSongObjects.slice(numberOfSongsOfList0, numberOfSongsOfList0 + numberOfSongsOfList1);
        break;
    case 2:
        songsOfSpecificPlaylist = collectionSongObjects.slice(numberOfSongsOfList0 + numberOfSongsOfList1, numberOfSongsOfList0 + numberOfSongsOfList1 + numberOfSongsOfList2);
        break;
  }


   for(var i = 0; i < songsOfSpecificPlaylist.length; i++){

     var innerDiv = document.createElement('div');
     innerDiv.id = 'divSong';

    //  innerDiv.style.width = '600px';
    //  innerDiv.style.height = '100px';
    //  innerDiv.style.backgroudColor = 'blue';

     iDiv.appendChild(innerDiv);

     var song = songsOfSpecificPlaylist[i];

     var songTitle = document.createElement('div');
     songTitle.innerText = song.getSongTitle();
     innerDiv.appendChild(songTitle);

     var songAuthor = document.createElement('div');
     songAuthor.innerText = song.getSongAuthor();
     innerDiv.appendChild(songAuthor);

     var songLength = document.createElement('div');
     songLength.innerText = song.getSongLength();
     innerDiv.appendChild(songLength);

     var songListened = document.createElement('div');
     songListened.innerText = song.getSongListened();
     innerDiv.appendChild(songListened);

     var img = document.createElement('div');
     img.innerHTML = '<img src="' + song.getImg() + '"/>';
     innerDiv.appendChild(img);
   }
 }

 function closePlaylist(){

 }
