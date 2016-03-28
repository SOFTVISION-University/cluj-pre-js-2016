function convertSecToMin(totalSeconds){
  var result;

  if(totalSeconds === null || totalSeconds === '' || totalSeconds === ' '|| totalSeconds === undefined){
    result = 'Not specified';
    return result;
  }

  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds - (minutes * 60);
      seconds = Math.round(seconds * 100) / 100;

  result = minutes < 10 ? "0" + minutes : minutes;
     result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
 return result;
}
