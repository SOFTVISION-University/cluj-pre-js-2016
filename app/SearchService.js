
var JSON_Quote = {
    "success": {
        "total": 1
    },
    "contents": {
        "quotes": [
            {
                "quote": "Be not afraid of greatness. Some are born great, some achieve greatness, and some have greatness thrust upon 'em....",
                "length": "116",
                "author": "William Shakespeare",
                "tags": [
                    "inspire"
                ],
                "category": "inspire",
                "date": "2016-03-28",
                "title": "Inspiring Quote of the day",
                "background": "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg",
                "id": "FG7_PlYnhPFaWL79P5076QeF"
            }
        ]
    }
};

function closePlaylist(){
	var divPlaylistContainer = document.getElementById('playlist-container');
	if (divPlaylistContainer) {
		divPlaylistContainer.parentNode.removeChild(divPlaylistContainer);
	}
 }

function generateCloseButton(){
	 var closeButtonDiv = document.createElement('div');
	 closeButtonDiv.id = 'divContainerButton';
	 document.getElementById('playlist-container').appendChild(closeButtonDiv);

	 var buttonClose = document.createElement('input');
   buttonClose.id = 'button-close-playlist';
   buttonClose.type = 'button';
   buttonClose.value = 'CLOSE';
   buttonClose.onclick = closePlaylist;

	 closeButtonDiv.appendChild(buttonClose);
}

function generateHeaderPlaylist(idOfPlaylist){
	var currentPlaylist = collectionPlaylistObjects[idOfPlaylist];
	var headerPlaylist = document.createElement('div');
	headerPlaylist.id = 'header-playlist';
	document.getElementById('playlist-container').appendChild(headerPlaylist);


	var img = document.createElement("img");
	img.id = 'img-playlist';
	img.src = currentPlaylist.getImgSmall();

	headerPlaylist.appendChild(img);

 var paragraph = document.createElement('p');
 var titlePlaylist = document.createElement('p');

 paragraph.id = 'parag-playlist';
 paragraph.className = 'text-header';

 titlePlaylist.id = 'title-playlist';
 titlePlaylist.className = 'text-header';

 paragraph.textContent = 'Playing from:';
 titlePlaylist.textContent = currentPlaylist.getTitle();

 headerPlaylist.appendChild(paragraph);
 headerPlaylist.appendChild(titlePlaylist);
}

function generateTablePlaylist(idOfPlaylist){
	var currentPlaylist = collectionPlaylistObjects[idOfPlaylist];

	var songsObjCurrentPlaylist = currentPlaylist.songs.map(function(obj){
  return new Song(obj.songTitle, obj.songAuthor, obj.songLength, obj.songListened, obj.image);
  });

	var innerDiv = document.createElement('div');
	innerDiv.id = 'divSong';

	document.getElementById('playlist-container').appendChild(innerDiv);

	var table = document.createElement('TABLE');
	table.id = 'table-songs';

	var tr = document.createElement('TR');
	tr.id = 'table-header-songs';
  table.appendChild(tr);

	var th1 = document.createElement('TD');
	th1.innerHTML = 'SONG';
	th1.setAttribute("colspan", 2);
	var th2 = document.createElement('TD');
	th2.innerHTML = 'LENGTH';
	var th3 = document.createElement('TD');
	th3.innerHTML = 'LISTENED';

  tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);


  for(var i = 0; i < songsObjCurrentPlaylist.length; i++){
		var song = songsObjCurrentPlaylist[i];

		var trBody1 =  document.createElement('TR');
 	  var trBody2 =  document.createElement('TR');
		trBody2.id = 'bottom-table-tr';
 	  var tdBody1 = document.createElement('TD');
		tdBody1.className = 'td-song';
 	  var tdBody2 = document.createElement('TD');
		tdBody2.id = 'top-td';
 	  var tdBody3 = document.createElement('TD');
		tdBody3.className = 'td-song';
 	  var tdBody4 = document.createElement('TD');
		tdBody4.className = 'td-song';
 	  var tdBody5 = document.createElement('TD');
		tdBody5.id = 'td-song-bottom';

    tdBody1.setAttribute("rowspan", 2);
 	  tdBody3.setAttribute("rowspan", 2);
 	  tdBody4.setAttribute("rowspan", 2);

	  tdBody1.innerHTML = '<img src="' + song.getImg() + '"/>';
 	  trBody1.appendChild(tdBody1);

	 	tdBody2.innerText = song.getSongTitle();
    trBody1.appendChild(tdBody2);

		tdBody3	.innerText = convertSecToMin(song.getSongLength());
 	  trBody1.appendChild(tdBody3);

	  tdBody4.innerText = song.getSongListened();
    trBody1.appendChild(tdBody4);

		tdBody5.innerText = 'by ' + song.getSongAuthor();
 	  trBody2.appendChild(tdBody5);

 	  table.appendChild(trBody1);
 	  table.appendChild(trBody2);
	}

	innerDiv.appendChild(table);
}


function generatePlaylist(idOfPlaylist){
  var myElem = document.getElementById('playlist-container');

  if(myElem === null){
		 var iDiv = document.createElement('div');
	   iDiv.id = 'playlist-container';
	   iDiv.className = 'container-playlist';

	   document.body.appendChild(iDiv);

		 generateCloseButton();
		 generateHeaderPlaylist(idOfPlaylist);
		 generateTablePlaylist(idOfPlaylist);

   }
 }



function getQuote(){
	var promise = new Promise(function(resolve, reject) {
  var request = new XMLHttpRequest();

  request.open('GET', 'http://quotes.rest/qod.json');
  request.onload = function() {
      if (request.status >= 200 && request.status < 300) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };

   request.onerror = function() {
      reject(Error('Error fetching data.'));
    };

   request.send();
  });

  promise.then(function(data) {
    //document.getElementsByTagName('body')[0].textContent = JSON.parse(data).value;
		document.getElementById('quote').innerHTML = data.contents.quotes[0].quote;
  }, function(error) {
    document.getElementById('quote').innerHTML = JSON_Quote.contents.quotes[0].quote;
  });
}

getQuote();
