function openPlaylist(){
window.alert("yes");

}
function closePlaylist(){
    // document.getElementByClass('playlist').classList.toggle('closed');
    // document.getElementsByClassName('playlist').toggleClass('closed');
    var x=document.getElementById("plyL");
    if( x.style.visibility == 'visible' ){
       x.style.visibility = 'hidden';
     }

    //
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
