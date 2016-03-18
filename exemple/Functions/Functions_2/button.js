'use strict';

function attachButtonEvents() {
  var buttonArr, buttonEl;
  buttonArr = document.getElementsByClassName('element-creator');
  if (buttonArr.length) {
    buttonEl = buttonArr[0];
    buttonEl.addEventListener('click', function() {
      var cardHolder = document.getElementById('card-area')
      createCards(1000, cardHolder);
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
  var i, cards, card, nbCards, handler,
      remCards = [];

  cards = document.getElementsByClassName('card');
  nbCards = cards.length;
  for (i = 0;i < nbCards;i++) {
    card = cards[0];
    handler = card.data;
    card.data = null;
    card.removeEventListener('click', handler);
    container.removeChild(card);
  }
}

function createCards(iterations, container) {
  var waitTime = 1;

  if (iterations <= 0) {
    return;
  }

  setTimeout(function() {
    var myDiv, clickHandler;

      myDiv = document.createElement('div');
      myDiv.innerText
      myDiv.className = 'card';
      clickHandler = listenClicks(iterations);
      myDiv.data = clickHandler;
      myDiv.ref = myDiv;
      myDiv.addEventListener('click', clickHandler);
      container.appendChild(myDiv);
      createCards(iterations - 1, container)
  }, waitTime);
}
