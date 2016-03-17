
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    // var x =screen.height;
    // console.log(typeof(x));
    // x-=200;
    // document.getElementById('playList').style.position = "fixed";
    // document.getElementById('playList').style.top=x+'px';
  });



function myFunction(){
console.log(document.getElementById('playList').style.top);
  document.getElementById('playList').style.visibility="visible";
  document.getElementById('playList').style.transition= "0.5s";
  // document.getElementById('playList').style.transform="translate(0,-350px)";
  document.getElementById('playList').style.height="400px"


}
