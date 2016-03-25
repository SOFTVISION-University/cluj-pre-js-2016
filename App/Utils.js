function convertToMin(nr){
  var min = Math.floor(nr / 60);
  var sec = nr % 60;

  if (sec < 10)
  {
    sec = "0"+sec;
  }
  var str = min + ":" + sec;
  return str;
}
