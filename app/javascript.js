'use strict';
var playlists = JSON.parse(playlistsJSON);
var users = JSON.parse(usersJSON);

//generating footer copyright
function copyright(){
  var d = new Date();
  var year = d.getFullYear();
  document.getElementById('copyright').innerHTML = "&copy; " + year +
  " ACME DIVISION ALL RIGHTS RESERVED";
}

//generating footer copyright in home.html
function copyrighthome(){
  var d = new Date();
  var year = d.getFullYear();
  document.getElementById('copyrighthome').innerHTML = "&copy; " + year +
  " ACME DIVISION ALL RIGHTS RESERVED";
}

//go to top and focus in sign up form
function goTop(){
  document.body.scrollTop = 0;
  document.getElementById("your_name").focus();
}

//converting seconds to minutes
function convert(time){
  var minutes = "" + Math.floor(time / 60);
  var seconds = "0" + (time - minutes * 60);
  return minutes.substr(-2) + ":" + seconds.substr(-2);
}

function createSongRow(songs){
  songs.forEach (function(item){
    var tableBody = document.getElementById('playlist-songs-body');
    var row = document.createElement('tr');
    var col1 = document.createElement('td');
    var col2 = document.createElement('td');
    var col3 = document.createElement('td');
    var col4 = document.createElement('td');
    var img = document.createElement('img');

    row.setAttribute('class','newRow');
    img.src = item.image;
    col2.innerHTML = item.songTitle + "</br>" + "by " + item.songAuthor;
    col3.innerHTML = convert(item.songLength);
    col4.innerHTML = item.songListened;
    tableBody.appendChild(row);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    col1.appendChild(img);
  });
}

function explorePlaylist(id){
  var playlistNumber = playlists[id];
  document.getElementById('playlist').className = "playlist-expand";
  var playlist = new Playlist(playlistNumber);
  console.log(ModelFactory.create("Playlist", playlistNumber));
  var song = new Song(playlistNumber.songs[id]);
  song.attach(playlist);
  song.getSongTitle();

  var songs = playlist.getPlaylistSongs();
  createSongRow(songs);
}

function closePlaylist(){
  document.getElementById('playlist').classList.remove("playlist-expand");
  var tableBody = document.getElementById('playlist-songs-body');
  tableBody.innerHTML = '';
}

function getFocus(input){
  input.className = "focus";
}

function getBlur(input){
  input.className = "blur";
}

function validateUser(){
  var bool = false;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var account = new AccountService(users);
  var accountUsers = account.getUsers();
  accountUsers.filter(function(user){
    if(user.email === email && user.password === password){
      account.login();
      window.location = "home.html";
      return bool;
    }
  });
  account.displayLoginError();
  return bool;
}

function drawCard(container,cardDiv){
  cardDiv.className = 'card';
  container.appendChild(cardDiv);
}

function drawMatDiv(matDiv,cardDiv){
  matDiv.className = 'mat';
  cardDiv.appendChild(matDiv);
}

function drawExploreButton(index,button,cardDiv){
  button.className = 'explore';
  button.setAttribute("onclick", "explorePlaylist("+ index +")");
  cardDiv.appendChild(button);
}

function drawCardImage(item,img,cardDiv){
  img.src = item.imageLarge;
  cardDiv.appendChild(img);
}

function drawPlayIcon(playIcon,button){
  playIcon.src = "../core/assets/play-icon.png";
  button.appendChild(playIcon);
}

function drawButtonText(buttonText,button){
  buttonText.innerText = ' Explore playlist';
  button.appendChild(buttonText);
}

function drawCardDescription(item,songTitle,description,cardDiv,paragraph){
  songTitle.innerText = item.title;
  description.innerText = item.description;
  cardDiv.appendChild(paragraph);
  cardDiv.appendChild(description);
  paragraph.appendChild(songTitle);
}

//creating cards in home page
function createCards(){
  playlists.forEach(function(item,index){
    var cardDiv = document.createElement('div');
    var matDiv = document.createElement('div');
    var button = document.createElement('button');
    var img = document.createElement('img');
    var playIcon = document.createElement('img');
    var paragraph = document.createElement('p');
    var description = document.createElement('p');
    var buttonText = document.createElement('span');
    var songTitle = document.createElement('strong');
    var container = document.getElementById('card-area');

    drawCard(container,cardDiv);
    drawMatDiv(matDiv,cardDiv)
    drawExploreButton(index,button,cardDiv);
    drawCardImage(item,img,cardDiv);
    drawCardDescription(item,songTitle,description,cardDiv,paragraph);
    drawPlayIcon(playIcon,button);
    drawButtonText(buttonText,button);
  });
}
