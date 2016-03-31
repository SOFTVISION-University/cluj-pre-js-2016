/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _homePage = __webpack_require__(1);
	
	var _SearchMusic = __webpack_require__(12);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _AccountService = __webpack_require__(2);
	
	var _PlaylistCollection = __webpack_require__(5);
	
	var _PlaylistCollectionView = __webpack_require__(7);
	
	// const link = 'http://192.168.28.109:3000/playlists';
	
	function createPlayLists(playlistCollection) {
	  var playlistCollectionView = new _PlaylistCollectionView.PlaylistCollectionView({
	    el: document.getElementById('playlist-holder'),
	    collection: playlistCollection
	  });
	  playlistCollectionView.render();
	}
	
	function createPlaylistsModel() {
	  var playlistCollection = new _PlaylistCollection.PlaylistCollection();
	  playlistCollection.fetch().done(function () {
	    createPlayLists(playlistCollection);
	  });
	}
	
	document.addEventListener('DOMContentLoaded', function () {
	  if (_AccountService.AccountService.getInstance().loggedUser !== null) {
	    document.getElementById('signInButton').style.visibility = 'hidden';
	    document.getElementById('logOutButton').style.visibility = 'visible';
	    var message = 'Hello ${ AccountService.getInstance().loggedUser.name }  !';
	    document.getElementById('username').innerText = message;
	  } else {
	    document.getElementById('logOutButton').style.visibility = 'hidden';
	    document.getElementById('username').innerText = '';
	  }
	
	  // getLinkContent();
	  // createPlayLists();
	  createPlaylistsModel();
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AccountService = undefined;
	
	var _LoginValidate = __webpack_require__(3);
	
	function AccountService() {
	  this.username = '';
	  this.password = '';
	  this.usersArray = [];
	  this.loggedUser = JSON.parse(localStorage.getItem('nameUser1'));
	}
	
	AccountService._instance = null;
	
	AccountService.getInstance = function () {
	  if (AccountService._instance === null) {
	    AccountService._instance = new AccountService();
	  }
	  return AccountService._instance;
	};
	AccountService.prototype.setUsername = function (username) {
	  this.username = username;
	};
	AccountService.prototype.setPassword = function (password) {
	  this.password = password;
	};
	AccountService.prototype.addUser = function (user) {
	  this.usersArray.push(user);
	};
	AccountService.prototype.checkLogin = function () {
	  var username = this.username;
	  var password = this.password;
	  var foundUser = this.usersArray.filter(function (user) {
	    if (user.name === username && user.password === password) {
	      AccountService.getInstance().loggedUser = user;
	      AccountService.getInstance().loggedUser.logged = true;
	      return true;
	    }
	    return false;
	  });
	  if (foundUser.length > 0) {
	    localStorage.setItem('nameUser1', JSON.stringify(AccountService.getInstance().loggedUser));
	    return _LoginValidate.LOGIN_SUCCESFULLY;
	  }
	  return _LoginValidate.INVALID_USERNAME;
	};
	exports.AccountService = AccountService;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.INVALID_USERNAME = exports.LOGIN_SUCCESFULLY = undefined;
	
	var _AccountService = __webpack_require__(2);
	
	var _User = __webpack_require__(4);
	
	var LOGIN_SUCCESFULLY = 0;
	var INVALID_PASSWORD = 1;
	var INVALID_USERNAME = 2;
	// const usernameJson = JSON.parse(usersJSON);
	
	function addUserToAccountService(userFromJS) {
	  var user = new _User.User(userFromJS);
	  _AccountService.AccountService.getInstance().addUser(user);
	}
	
	document.addEventListener('DOMContentLoaded', function () {
	  // usernameJson.forEach(addUserToAccountService);
	});
	
	function logOutUser() {
	  localStorage.setItem('nameUser1', null);
	  window.location.href = 'index.html';
	}
	
	function validate() {
	  var username = document.getElementById('username').value;
	  var password = document.getElementById('password').value;
	  _AccountService.AccountService.getInstance().setUsername(username);
	  _AccountService.AccountService.getInstance().setPassword(password);
	  var loginView = new LoginView();
	
	  switch (_AccountService.AccountService.getInstance().checkLogin()) {
	    case LOGIN_SUCCESFULLY:
	
	      loginView.showLoginSucces();
	      window.location.href = 'index.html';
	      break;
	    case INVALID_PASSWORD:
	      loginView.showInvalidPasswod();
	      break;
	    case INVALID_USERNAME:
	      loginView.showInvalidUsername();
	      break;
	    default:
	
	  }
	}
	function focusOut(id) {
	  id.className = 'focusOut';
	}
	function focusIt(id) {
	  id.className = 'focusIn';
	}
	exports.LOGIN_SUCCESFULLY = LOGIN_SUCCESFULLY;
	exports.INVALID_USERNAME = INVALID_USERNAME;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function User(data) {
	  this.name = data.userName;
	  this.email = data.email;
	  this.password = data.password;
	  this.logged = false;
	}
	
	User.prototype.getUserName = function () {
	  return this.name;
	};
	exports.User = User;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistCollection = undefined;
	
	var _PlaylistModel = __webpack_require__(6);
	
	var PlaylistCollection = Backbone.Collection.extend({
	  model: _PlaylistModel.PlaylistModel,
	  url: 'http://localhost:3000/playlists',
	  parse: function parse(resp) {
	    return resp.map(function (playlist) {
	      var model = new _PlaylistModel.PlaylistModel();
	      model.set(playlist);
	      return model;
	    });
	  }
	});
	exports.PlaylistCollection = PlaylistCollection;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PlaylistModel = Backbone.Model.extend({
	  default: {
	    name: 'title'
	  }
	});
	exports.PlaylistModel = PlaylistModel;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistCollectionView = undefined;
	
	var _PlaylistView = __webpack_require__(8);
	
	var PlaylistCollectionView = Backbone.View.extend({
	  render: function render() {
	    var collView = this;
	    this.collection.forEach(function (model) {
	      var playlistView = new _PlaylistView.PlaylistView({
	        model: model
	      });
	      collView.el.appendChild(playlistView.render().el);
	    });
	  }
	});
	exports.PlaylistCollectionView = PlaylistCollectionView;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistView = undefined;
	
	var _SongCollectionView = __webpack_require__(9);
	
	var _PlaylistHeaderView = __webpack_require__(11);
	
	function drawSonsCollectionView(selectedPlaylist) {
	  var songCollectionView = new _SongCollectionView.SongCollectionView({
	    el: document.getElementById('songsHolder'),
	    collection: selectedPlaylist
	  });
	  songCollectionView.render();
	}
	
	function drawPlayListHeader(playListObject) {
	  var playListHeaderView = new _PlaylistHeaderView.PlaylistHeaderView({
	    el: document.getElementById('playList'),
	    model: playListObject
	  });
	  playListHeaderView.render();
	  var platListDiv = document.getElementById('playList');
	  platListDiv.className = 'showPlayList';
	  platListDiv.style.visibility = 'visible';
	  platListDiv.style.transition = '0.5s';
	  platListDiv.style.height = '400px';
	}
	
	function showPlaylist(playlist) {
	  var selectedPlaylist = playlist.songs;
	  drawPlayListHeader(playlist);
	  drawSonsCollectionView(selectedPlaylist);
	}
	
	var PlaylistView = Backbone.View.extend({
	  events: {
	    click: 'onClickExplorePlaylist'
	  },
	  onClickExplorePlaylist: function onClickExplorePlaylist() {
	    showPlaylist(this.model.attributes);
	  },
	
	  className: 'playlistCl',
	  template: function template(values) {
	    var templateText = document.querySelector('#playlist-item').innerText;
	    var compiled = _.template(templateText);
	    if (values !== null) {
	      return compiled(values);
	    }
	    return compiled();
	  },
	  render: function render() {
	    this.$el.append(this.template(this.model.attributes));
	    return this;
	  }
	});
	
	exports.PlaylistView = PlaylistView;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SongCollectionView = undefined;
	
	var _SongView = __webpack_require__(10);
	
	var SongCollectionView = Backbone.View.extend({
	  render: function render() {
	    var that = this;
	    this.collection.forEach(function (model) {
	      var songView = new _SongView.SongView({
	        model: model
	      });
	      that.el.appendChild(songView.render().el);
	    });
	  }
	});
	exports.SongCollectionView = SongCollectionView;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SongView = Backbone.View.extend({
	  template: function template(values) {
	    var templateText = document.querySelector('#song-item').innerText;
	    var compiled = _.template(templateText);
	    if (values !== null) {
	      return compiled(values);
	    }
	    return compiled();
	  },
	  render: function render() {
	    this.$el.append(this.template(this.model));
	    return this;
	  }
	});
	exports.SongView = SongView;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PlaylistHeaderView = Backbone.View.extend({
	  events: {
	    'click #closeImg': 'closeThePlaylist'
	  },
	  closeThePlaylist: function closeThePlaylist() {
	    this.el.remove();
	  },
	  template: function template(values) {
	    var templateText = document.querySelector('#header-playlist').innerText;
	    var compiled = _.template(templateText);
	    if (values !== null) {
	      return compiled(values);
	    }
	    return compiled();
	  },
	  render: function render() {
	    this.$el.append(this.template(this.model));
	    return this;
	  }
	});
	exports.PlaylistHeaderView = PlaylistHeaderView;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function getPlaylistSongs(val) {
	  return val.songs;
	}
	
	function concatSongsArray(memo, val) {
	  return memo.concat(val);
	}
	
	function getSongTitles(val) {
	  return val.songTitle;
	}
	
	function filterFunc(val) {
	  if (val.indexOf(document.getElementById('searchStr').value) === 0) {
	    return true;
	  }
	  return false;
	}
	
	function clearMusicResult() {
	  var searchMusicDiv = document.getElementById('search_music');
	  searchMusicDiv.innerHTML = '';
	}
	
	function drawResults(result) {
	  var searchMusicDiv = document.getElementById('search_music');
	  var musicResultDiv = document.getElementById('option_music');
	  clonedResult = musicResultDiv.cloneNode(true);
	  clonedResult.value = result;
	  searchMusicDiv.appendChild(clonedResult);
	}
	
	function searchMusic() {
	  var songsArray = playListFromJS.map(getPlaylistSongs).reduce(concatSongsArray, []).map(getSongTitles).filter(filterFunc);
	  clearMusicResult();
	  songsArray.forEach(drawResults);
	}
	exports.searchMusic = searchMusic;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map