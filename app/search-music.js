
function SearchByValue(values){


  for(i = 0;i<playlist_1.length;i++){
     var dim = playlist_1[i].getLengthSongs();
     for(y = 0;y<dim;y++){
           if(values == playlist_1[i].songs[y].getTitle()){
                               clonare(i);
                               break;


          }
      }

   }

}
