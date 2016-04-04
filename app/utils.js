function slidePlayListIn(elem) {
  let left = -600;
  const id = setInterval(() => {
    if (left === 50) {
      clearInterval(id);
    } else {
      left += 5;
      elem.style.left = left + 'px';
    }
  }, 1);
}

function slidePlayListOut(elem) {
  let left = parseInt(elem.style.left.substr(0, 2), 10);
  if (left === 50) {
    console.log(left);
    const id = setInterval(() => {
      if (left === -600) {
        clearInterval(id);
      } else {
        left -= 5;
        elem.style.left = left + 'px';
      }
    }, 1);
  }
}

function setHeaderBackground(item){
  const elem = document.getElementById('header');
  elem.style.backgroundImage = "url('"+item+"')";
}


export default { slidePlayListIn, slidePlayListOut, setHeaderBackground };
