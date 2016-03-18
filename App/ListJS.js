var jsonObj = {
    playlist:
           {
            picture1: "../core/assets/massive-pop-hits.png",
            title1: "text1",
            description:"text2",
            songs:
            [
                "value1",
                "value2",
                "value3",
                "value4",
                "value5",
                "val6",
                "val7",
                "val8"
            ],
            songPict:["../core/assets/beats-like-birds.png",
            "../core/assets/chill-vibes.png",
            "../core/assets/indie-rocker.png",
            "../core/assets/random-playlist.png",
            "../core/assets/beats-like-birds.png"]


        }
}
var jsonUserName={
      name:"username",
      password:"password"
}


document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // var obj = JSON.parse(jsonObj);
    var path = jsonObj.playlist.picture1;
    console.log(path);
    document.getElementById('playL1').style.backgroundImage='url("'+path+'")';
    var a=  Array.prototype.slice.call(jsonObj);
    console.log(a);
  });


  


function myFunction(){
console.log(document.getElementById('playList').style.top);
  document.getElementById('playList').style.visibility="visible";
  document.getElementById('playList').style.transition= "0.5s";
  document.getElementById('playList').style.height="400px"


  // console.log(obj);
  for (var i = 0; i <  jsonObj.playlist.songs.length; i++)
  {
    var nr=i+1;
    var div = document.getElementById('toClone');


    clonedDiv = div.cloneNode(true); // true means clone all childNodes and all event handlers
    clonedDiv.id = "song"+nr;
    document.getElementById('playList').appendChild(clonedDiv);

    document.getElementById('song'+nr).style.visibility='visible';
    var imgPath =jsonObj.playlist.songPict[i];
    var img=clonedDiv.getElementsByTagName('img')[0];
    img.style.float="left";
    img.style.backgroundImage='url("'+imgPath+'")';

    var tempDiv =clonedDiv.getElementsByTagName('div')[0];
    tempDiv.style.textAlign="center";
    tempDiv.style.width="50%";
    tempDiv.style.display="inline-block";
    var span=tempDiv.getElementsByTagName('span')[0];
    span.innerText=jsonObj.playlist.songs[i];

    var tempDiv =clonedDiv.getElementsByTagName('div')[1];
    tempDiv.style.textAlign="center";
    tempDiv.style.width="10%";
    tempDiv.style.display="inline-block";
    var span=tempDiv.getElementsByTagName('span')[0];
    span.innerText=jsonObj.playlist.songs[i];

    var tempDiv =clonedDiv.getElementsByTagName('div')[2];
    tempDiv.style.textAlign="center";
    tempDiv.style.width="20%";
    tempDiv.style.display="inline-block";
    var span=tempDiv.getElementsByTagName('span')[0];
    span.innerText=jsonObj.playlist.songs[i];

  }
}
