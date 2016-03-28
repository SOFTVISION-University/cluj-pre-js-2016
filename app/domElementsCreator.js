var DomElementsCreator = {

  // domElementsCreator Class Methods

  createSongImg: function(song){
    var element = document.createElement("img");
    element.setAttribute("class","songImg");
    element.setAttribute("src",song.getImagePath());
    return element;
  },
  createSongNumber: function(song , type){
    var element = document.createElement("div");
    element.setAttribute("class","songNumbers");
    switch(type) {
      case 'length':
        element.appendChild(document.createTextNode(lengthFormat(song.getLength())));
        break;
      case 'count':
        element.appendChild(document.createTextNode(song.getPlayCount()));
        break;
      default:
        console.log("type of song number is not given");
    }
    return element;
  },

  createSongTitle: function(song){
    var element = document.createElement("span");
    element.classList.add("songTitle");
    element.classList.add("textBiggerGri");
    element.appendChild(document.createTextNode(song.getTitle()));
    return element;
  },

  createSongAuthor: function(song){
    var element = document.createElement("span");
    element.classList.add("textMediuGri");
    element.appendChild(document.createTextNode("by "+song.getAuthor()));
    return element;
  }

};
