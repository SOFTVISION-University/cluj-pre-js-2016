'use strict';

function attachButtonEvents() {
  var buttonArr, buttonEl;
  buttonArr = document.getElementsByClassName('element-creator');
  if (buttonArr.length) {
    buttonEl = buttonArr[0];
    buttonEl.addEventListener('click', function() {
      var cardHolder = document.getElementById('card-area')
      createCards(5, cardHolder);
    })
  }

  buttonArr = document.getElementsByClassName('element-remover');
  if (buttonArr.length) {
    buttonEl = buttonArr[0];
    buttonEl.addEventListener('click', function() {
      var cardHolder = document.getElementById('card-area')
      removeCards(cardHolder);
    })
  }
}

function listenClicks(iterations) {
  return function() {
    var clickedValue;

    clickedValue = document.getElementsByClassName('value-holder')[0];
    clickedValue.innerText = 'Clicked on button with value ' + iterations;
  }
}

function removeCards(container) {
  var i, cards, card;

  cards = document.getElementsByClassName('card');
  for (i = 0;i < cards.length;i++) {
    card = cards [i];
    container.removeChild(card);
  }
}

function createCards(iterations, container) {
  var i, myDiv,
      waitTime = 1000,
      container;

      if (iterations <= 0) {
        return;
      }

  setTimeout(function() {
      myDiv = document.createElement('div');
      myDiv.innerText
      myDiv.className = 'card';
      myDiv.addEventListener('click', listenClicks(iterations));
      container.appendChild(myDiv);
      createCards(iterations - 1, container)
  }, waitTime);
}
