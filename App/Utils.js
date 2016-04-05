function convertToMin(nr) {
  const min = Math.floor(nr / 60);
  let sec = nr % 60;

  if (sec < 10) {
    sec = '0${sec}';
  }
  const str = '${min}:${sec}';
  return str;
}
export { convertToMin };
