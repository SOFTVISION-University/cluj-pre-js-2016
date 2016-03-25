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

function explorePlaylist(playlistNumber){
  document.getElementById('playlist').className = "playlist-expand";
  var playlist = new Playlist(playlists[playlistNumber]);
  console.log(ModelFactory.create("Playlist", playlists[playlistNumber]));
  var song = new Song(playlists[playlistNumber].songs[playlistNumber]);
  song.attach(playlist);
  song.getSongTitle();

  var songs = playlist.getPlaylistSongs();
  for (var i = 0; i < songs.length; i++){
    var tableBody = document.getElementById('playlist-songs-body');
    var row = document.createElement('tr');
    var col1 = document.createElement('td');
    var col2 = document.createElement('td');
    var col3 = document.createElement('td');
    var col4 = document.createElement('td');
    var img = document.createElement('img');

    row.setAttribute('class','newRow');
    img.src = songs[i].image;
    col2.innerHTML = songs[i].songTitle + "</br>" + "by " + songs[i].songAuthor;
    col3.innerHTML = convert(songs[i].songLength);
    col4.innerHTML = songs[i].songListened;
    tableBody.appendChild(row);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    col1.appendChild(img);
  }
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
  for(var i = 0; i < accountUsers.length; i++){
    if(accountUsers[i].email == email && accountUsers[i].password == password){
      account.login();
      window.location = "home.html";
      return bool;
    }
  }
  account.displayLoginError();
  return bool;
}

//creating cards in home page
function createCards(){
  for (var i = 0; i < playlists.length; i++){
    var cardDiv = document.createElement('div');
    var matDiv = document.createElement('div');
    var button = document.createElement('button');
    var img = document.createElement('img');
    var playIcon = document.createElement('img');
    var paragraph = document.createElement('p');
    var desc = document.createElement('p');
    var buttonText = document.createElement('span');
    var songTitle = document.createElement('strong');
    var container = document.getElementById('card-area');

    cardDiv.className = 'card';
    matDiv.className = 'mat';
    button.className = 'explore';
    buttonText.innerText = ' Explore playlist';
    button.setAttribute("onclick", "explorePlaylist("+ i +")");
    img.src = playlists[i].imageLarge;
    playIcon.src = "../core/assets/play-icon.png";
    songTitle.innerText = playlists[i].title;
    desc.innerText = playlists[i].description;
    container.appendChild(cardDiv);
    cardDiv.appendChild(matDiv);
    cardDiv.appendChild(button);
    cardDiv.appendChild(img);
    cardDiv.appendChild(paragraph);
    cardDiv.appendChild(desc);
    paragraph.appendChild(songTitle);
    button.appendChild(playIcon);
    button.appendChild(buttonText);
  }
}
