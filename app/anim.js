
function myFunction() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	document.forms['regform'].elements['regname'].focus();
}

function showPlaylist2() {
  var appear;
  appear = document.getElementById("playlist2");
  appear.style.display = 'block';
}

function hidePlaylist2() {
  var appear;
  appear = document.getElementById("playlist2");
  appear.style.display = 'none';
}

function showPlaylist1() {
  var appear;
  appear = document.getElementById("playlist1");
  appear.style.display = 'block';
}

function hidePlaylist1() {
  var appear;
  appear = document.getElementById("playlist1");
  appear.style.display = 'none';
}

function showPlaylist3() {
	var appear;
  appear = document.getElementById("playlist3");
	appear.style.display = 'block';
}

function hidePlaylist3() {
  var appear;
	appear = document.getElementById("playlist3");
	appear.style.display = 'none';
}

var playlistsJSON = '[{"id":0,"title":"Playlist 1","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82},{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies pierdut","songAuthor":"Dr. Dre","songLength":186,"songListened":78},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money pierdut ea","songAuthor":"Andra","songLength":303,"songListened":94},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies el buletin ea","songAuthor":"Andra","songLength":359,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin el buletin love","songAuthor":"Eminem","songLength":312,"songListened":11},{"image":"../core/assets/2015-best-music.png","songTitle":"pierdut pierdut enemies ea","songAuthor":"Eminem","songLength":37,"songListened":9},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money enemies enemies","songAuthor":"Dr. Dre","songLength":325,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money el money","songAuthor":"Eminem","songLength":58,"songListened":10}],"imageLarge":"../core/assets/up-all-night.png","imageSmall":"../core/assets/up-all-night-small.png","description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."},{"id":1,"title":"Playlist 2","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"money money love ea","songAuthor":"Dr. Dre","songLength":97,"songListened":100},{"image":"../core/assets/2015-best-music.png","songTitle":"el pierdut pierdut ea","songAuthor":"Smiley","songLength":42,"songListened":86},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money pierdut enemies","songAuthor":"Dr. Dre","songLength":454,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"money ea love buletin","songAuthor":"Dr. Dre","songLength":448,"songListened":16},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin pierdut ea el","songAuthor":"Dr. Dre","songLength":363,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"el love el buletin","songAuthor":"Smiley","songLength":88,"songListened":20}],"imageLarge":"../core/assets/up-all-night.png","imageSmall":"../core/assets/up-all-night-small.png","description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."},{"id":2,"title":"Playlist 3","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"enemies enemies el love","songAuthor":"Smiley","songLength":192,"songListened":51},{"image":"../core/assets/2015-best-music.png","songTitle":"el enemies pierdut el","songAuthor":"Andra","songLength":232,"songListened":87},{"image":"../core/assets/2015-best-music.png","songTitle":"ea enemies pierdut enemies","songAuthor":"Smiley","songLength":234,"songListened":5},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies ea enemies buletin","songAuthor":"Andra","songLength":123,"songListened":45},{"image":"../core/assets/2015-best-music.png","songTitle":"love money buletin love","songAuthor":"Andra","songLength":299,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"el love ea love","songAuthor":"Andra","songLength":478,"songListened":34},{"image":"../core/assets/2015-best-music.png","songTitle":"ea el enemies money","songAuthor":"Dr. Dre","songLength":280,"songListened":35}],"imageLarge":"../core/assets/up-all-night.png","imageSmall":"../core/assets/up-all-night-small.png","description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."}]';
var usersJSON = '[{"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"},{"userName":"whitley","email":"kathywhitley@quailcom.com","password":"inson2079"},{"userName":"fletcher","email":"kathyfletcher@quailcom.com","password":"rederick8363"}]';
