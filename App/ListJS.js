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
                "value5"
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

var playList= JSON.parse(playlistsJSON);
// console.log(playList[1].songs);

document.addEventListener("DOMContentLoaded", function(event) {
    // console.log("DOM fully loaded and parsed");

    // var obj = JSON.parse(jsonObj);
    var path = jsonObj.playlist.picture1;
    // console.log(path);
    document.getElementById('playL1').style.backgroundImage='url("'+path+'")';
    var a=  Array.prototype.slice.call(jsonObj);
    // console.log(a);
  });





function myFunction(){

  document.getElementById('playList').style.visibility="visible";
  document.getElementById('playList').style.transition= "0.5s";
  document.getElementById('playList').style.height="400px"

// var songsList =

  // console.log(obj);
  for (var i = 0; i <  playList[1].songs.length; i++)
  {
    var nr=i+1;

    // var tabContainer = ;
    // console.log("tb+"+tabContainer);
    // var div = getFirstChild();
    // var div1 = document.getElementById('TestDiv1');
    // console.log("first:"+div1.nodeName);
    // console.log("first:"+div1.firstChild);

    var div = document.getElementsByClassName("divToClone")[0];
    // div.innerHTML=div1.innerHTML;



    clonedDiv = div.cloneNode(true);
    //  console.log("type2: "+typeof div);

    clonedDiv.id = "song"+nr;
    document.getElementById('playList').appendChild(clonedDiv);
    // console.log("type3: "+clonedDiv);

    document.getElementById('song'+nr).style.visibility='visible';
    var imgPath =playList[1].songs[i].image;
    var img=clonedDiv.getElementsByTagName('img')[0];
    img.style.float="left";
    img.style.backgroundImage='url("'+imgPath+'")';

    var tempDiv =clonedDiv.getElementsByTagName('div')[0];
    tempDiv.style.textAlign="center";
    tempDiv.style.width="50%";
    tempDiv.style.display="inline-block";
    var span=tempDiv.getElementsByTagName('span')[0];
    span.innerText=playList[1].songs[i].songTitle;

    var tempDiv =clonedDiv.getElementsByTagName('div')[1];
    tempDiv.style.textAlign="center";
    tempDiv.style.width="10%";
    tempDiv.style.display="inline-block";
    var span=tempDiv.getElementsByTagName('span')[0];
    span.innerText=convertToMin(playList[1].songs[i].songLength);

    var tempDiv =clonedDiv.getElementsByTagName('div')[2];
    tempDiv.style.textAlign="center";
    tempDiv.style.width="20%";
    tempDiv.style.display="inline-block";
    var span=tempDiv.getElementsByTagName('span')[0];
    span.innerText=playList[1].songs[i].songListened;

   var newBr =  document.createElement("br");
   clonedDiv.appendChild(newBr);
  }
}


function convertToMin(nr)
{
  console.log(nr);
  var min = Math.floor(nr / 60);
  var sec = nr % 60;
  console.log((sec % 10));

  if (sec<10)
  {
    sec +="0";
  }
  var str = min+":"+sec;
  return str;
}
