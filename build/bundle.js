/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _playlistCollection = __webpack_require__(1);

	var _userModel = __webpack_require__(12);

	var _routerBackbone = __webpack_require__(17);

	$(function () {
	  var userModel = new _userModel.UserModel();
	  var playlists = new _playlistCollection.PlaylistsCollection();
	  var router = new _routerBackbone.Router();
	  router.setPlaylists(playlists);
	  router.setCurrentUser(userModel);
	  Backbone.history.start();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistsCollection = undefined;

	var _playlistModel = __webpack_require__(2);

	var PlaylistsCollection = Backbone.Collection.extend({
	  model: _playlistModel.PlaylistModel,
	  url: 'http://localhost:3000/playlists',
	  safeFetch: function safeFetch() {
	    if (this.length) {
	      return Promise.resolve();
	    }
	    return this.fetch();
	  },
	  parse: function parse(resp) {
	    return resp.map(function (play) {
	      var model = new _playlistModel.PlaylistModel();
	      model.set(play);
	      return model;
	    });
	  }
	});

	exports.PlaylistsCollection = PlaylistsCollection;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PlaylistModel = Backbone.Model.extend({
	  defaults: {
	    id: +new Date(),
	    title: 'cosmin',
	    songs: [],
	    description: 'daaa',
	    imageLarge: '../core/assets/2015-best-music.png',
	    imageSmall: '../core/assets/2015-best-music.png'
	  }

	});
	exports.PlaylistModel = PlaylistModel;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistsView = undefined;

	var _playlistView = __webpack_require__(4);

	var PlaylistsView = Backbone.View.extend({
	  _nestedView: [],
	  renderNestedView: function renderNestedView(view) {
	    this._nestedView.push(view);
	    this.$el.append(view.el);
	  },
	  render: function render() {
	    var that = this;
	    var partEl = this.el;
	    this.collection.forEach(function (model) {
	      var playlistView = new _playlistView.PlaylistView({
	        model: model
	      });
	      playlistView.render();
	      that.renderNestedView(playlistView, partEl);
	    });

	    return this;
	  }
	});
	exports.PlaylistsView = PlaylistsView;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistView = undefined;

	var _containerPlaylistSongsView = __webpack_require__(16);

	var PlaylistView = Backbone.View.extend({
	  events: {
	    'click .button_playlist': 'openSongView'
	  },
	  openSongView: function openSongView() {
	    var containerSongs = new _containerPlaylistSongsView.ContainerPlaylistSongs({
	      model: this.model,
	      el: document.querySelector('.pop_playlist')
	    });
	    containerSongs.render();
	  },
	  renderTemplate: function renderTemplate(selectorString, options) {
	    var templateText = document.querySelector(selectorString).innerText;
	    var compiled = _.template(templateText);
	    if (options !== null) {
	      return compiled(options);
	    }
	    return compiled();
	  },
	  template: function template(val) {
	    return this.renderTemplate('#template-Playlist', val);
	  },
	  render: function render() {
	    this.$el.html(this.template(this.model.attributes));
	    return this;
	  }
	});
	exports.PlaylistView = PlaylistView;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SongsListColection = undefined;

	var _songModel = __webpack_require__(6);

	var SongsListColection = Backbone.Collection.extend({
	  model: _songModel.SongModel
	});
	exports.SongsListColection = SongsListColection;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SongModel = Backbone.Model.extend({
	  defaults: {
	    image: 'Robert',
	    songTitle: 23,

	    songAuthor: 'daaaa',
	    songLength: 'daaa',
	    songListened: 20
	  }

	});
	exports.SongModel = SongModel;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SongsView = undefined;

	var _songView = __webpack_require__(8);

	var SongsView = Backbone.View.extend({
	  _nestedView: [],
	  renderNestedView: function renderNestedView(view) {
	    this._nestedView.push(view);
	    this.$el.append(view.el);
	  },
	  render: function render() {
	    var that = this;
	    var partEl = this.el;
	    this.collection.forEach(function (model) {
	      var songView = new _songView.SongView({
	        model: model
	      });
	      songView.render();
	      that.renderNestedView(songView, partEl);
	    });
	    return this;
	  }
	});
	exports.SongsView = SongsView;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SongView = Backbone.View.extend({
	  renderTemplate: function renderTemplate(selectorString, options) {
	    var templateText = document.querySelector(selectorString).innerText;
	    var compiled = _.template(templateText);
	    if (options !== null) {
	      return compiled(options);
	    }
	    return compiled();
	  },
	  template: function template(val) {
	    return this.renderTemplate('#template-FriendInListView', val);
	  },
	  render: function render() {
	    this.$el.html(this.template(this.model.attributes));
	    return this;
	  }
	});
	exports.SongView = SongView;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var HeaderView = Backbone.View.extend({
	  renderTemplate: function renderTemplate(selectorString, options) {
	    var templateText = document.querySelector(selectorString).innerText;

	    var compiled = _.template(templateText);
	    if (options !== null) {
	      return compiled(options);
	    }
	    return compiled();
	  },
	  template: function template(val) {
	    return this.renderTemplate('#template-HeaderPlaylist', val);
	  },
	  render: function render() {
	    this.$el.html(this.template(this.model.attributes));
	    return this;
	  }
	});
	exports.HeaderView = HeaderView;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LogInView = undefined;

	var _userObj = __webpack_require__(11);

	var LogInView = exports.LogInView = Backbone.View.extend({
	  events: {
	    'click #SignIn_button ': 'logIn'
	  },
	  renderTemplate: function renderTemplate(selectorString, options) {
	    var templateText = document.querySelector(selectorString).innerText;
	    var compiled = _.template(templateText);
	    if (options !== null) {
	      return compiled(options);
	    }
	    return compiled();
	  },
	  template: function template(val) {
	    return this.renderTemplate('#template-logIn', val);
	  },
	  render: function render() {
	    this.$el.html(this.template());
	    return this;
	  },
	  logIn: function logIn() {
	    this.model.logIn(this.model);
	    this.model.set(_userObj.user);

	    this.model.triggerEventOnHeader();
	    window.location.href = '#';
	  }
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var user = exports.user = {
	  fullName: '',
	  username: '',
	  token: '',
	  backgroundColor: '',
	  status: false
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserModel = undefined;

	var _userObj = __webpack_require__(11);

	var UserModel = exports.UserModel = Backbone.Model.extend({
	  defaults: {
	    fullName: '',
	    username: '',
	    token: '',
	    backgroundColor: '',
	    status: false
	  },
	  triggerEventOnHeader: function triggerEventOnHeader() {
	    this.trigger('triggerHead');
	  },
	  triggerLogOut: function triggerLogOut() {
	    this.status = false;
	    this.trigger('triggerLogout');
	  },
	  logIn: function logIn() {
	    var that = this;
	    var data = {
	      username: document.getElementById('e-mail').value,
	      password: document.getElementById('pass').value
	    };
	    $.ajax({
	      type: 'POST',
	      url: 'http://localhost:3000/auth',
	      data: JSON.stringify(data),
	      dataType: 'json',
	      contentType: 'application/json'
	    }).done(function (token) {
	      _userObj.user.token = token;
	      _userObj.user.username = data.username;
	      _userObj.user.status = true;
	      that.getPreferenced();
	    });
	  },
	  getPreferenced: function getPreferenced() {
	    $.ajax({
	      type: 'GET',
	      url: 'http://localhost:3000/preferences',
	      headers: {
	        'x-token': _userObj.user.token
	      }
	    }).done(function (data) {
	      var dataPars = JSON.parse(data);
	      _userObj.user.backgroundColor = dataPars.gsx$background.$t;
	      _userObj.user.fullName = dataPars.gsx$fullname.$t;
	    });
	  }
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HeaderView = undefined;

	var _logOutButtonView = __webpack_require__(14);

	var HeaderView = exports.HeaderView = Backbone.View.extend({
	  render: function render() {
	    var logOutButtonView = new _logOutButtonView.LogOutButtonView({
	      model: this.model,
	      el: document.querySelector('#right')
	    });
	    logOutButtonView.render();
	    this.listenTo(this.model, 'triggerHead', function () {
	      if (this.model.get('status') === true) {
	        logOutButtonView.render();
	        var imageBackground = this.model.get('backgroundColor');
	        document.querySelector('.container').style.backgroundImage = 'url(' + imageBackground + ')';
	      } else {
	        logOutButtonView.render();
	        document.querySelector('.container').style.backgroundImage = 'url(../core/assets/banner-top.jpg)';
	      }
	    });
	  }
	});

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var LogOutButtonView = exports.LogOutButtonView = Backbone.View.extend({
	  events: {
	    'click #logOut ': 'logOutFunction',
	    'click #logIn': 'logInFunction'
	  },
	  logInFunction: function logInFunction() {
	    window.location.href = '#login';
	  },
	  renderTemplate: function renderTemplate(selectorString, options) {
	    var templateText = document.querySelector(selectorString).innerText;
	    var compiled = _.template(templateText);
	    if (options !== null) {
	      return compiled(options);
	    }
	    return compiled();
	  },
	  template: function template() {
	    if (this.model.get('status')) {
	      return this.renderTemplate('#template-logOutButton');
	    }
	    return this.renderTemplate('#template-logInButton');
	  },
	  render: function render() {
	    this.$el.html(this.template());
	    return this;
	  },
	  logOutFunction: function logOutFunction() {
	    var that = this;

	    $.ajax({
	      type: 'POST',
	      url: 'http://localhost:3000/logout',
	      headers: {
	        'x-token': that.model.get('token')
	      }
	    }).done(function (data) {
	      that.model.set('status', false);
	      that.model.triggerEventOnHeader();
	    });
	  }
	});

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var RegistrationPageView = exports.RegistrationPageView = Backbone.View.extend({
	  events: {
	    'click #SignUp-button ': 'signUp'
	  },
	  renderTemplate: function renderTemplate(selectorString, options) {
	    var templateText = document.querySelector(selectorString).innerText;
	    var compiled = _.template(templateText);
	    if (options !== null) {
	      return compiled(options);
	    }
	    return compiled();
	  },
	  template: function template() {
	    return this.renderTemplate('#template-registerPage');
	  },
	  render: function render() {
	    this.$el.html(this.template());
	    return this;
	  },
	  signUp: function signUp() {
	    var data = {
	      email: document.getElementById('e-mail-reg').value,
	      username: document.getElementById('username').value,
	      password: document.getElementById('password-reg').value
	    };
	    $.ajax({
	      type: 'post',
	      url: 'http://localhost:3000/register',
	      data: JSON.stringify(data),
	      dataType: 'json',
	      contentType: 'application/json'
	    }).error(function (token) {
	      console.log(token);
	    });
	  }
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ContainerPlaylistSongs = undefined;

	var _songsCollection = __webpack_require__(5);

	var _songsView = __webpack_require__(7);

	var _headerPlaylist = __webpack_require__(9);

	var ContainerPlaylistSongs = exports.ContainerPlaylistSongs = Backbone.View.extend({
	  events: {
	    'click ': 'closePlaylist'
	  },
	  initialize: function initialize() {
	    this.songs = new _songsCollection.SongsListColection();
	    this.songs.set(this.model.attributes.songs);
	    this.songsView = new _songsView.SongsView({
	      el: document.getElementById('name_songs'),
	      collection: this.songs
	    });
	    this.headerView = new _headerPlaylist.HeaderView({
	      el: document.getElementById('footer_playlist'),
	      model: this.model
	    });
	  },
	  render: function render() {
	    this.songsView.render();
	    this.headerView.render();
	    this.openPlaylist();
	  },
	  openPlaylist: function openPlaylist() {
	    var x = document.getElementById('pop_playlist1');
	    x.style.transition = '0.5s';
	    x.style.height = '800px';
	  },
	  closePlaylist: function closePlaylist() {
	    var x = document.getElementById('pop_playlist1');
	    x.style.transition = '0.5s';
	    x.style.height = '0px';
	    var list = document.getElementById('name_songs');
	    while (list.hasChildNodes()) {
	      list.removeChild(list.firstChild);
	    }
	  }
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Router = undefined;

	var _logInView = __webpack_require__(10);

	var _registrationView = __webpack_require__(15);

	var _playlistPageView = __webpack_require__(18);

	var Router = exports.Router = Backbone.Router.extend({
	  currentUser: '',
	  playlists: '',
	  playlistsCollection: '',
	  setCurrentUser: function setCurrentUser(model) {
	    this.currentUser = model;
	  },
	  setPlaylists: function setPlaylists(playlists) {
	    this.playlists = playlists;
	  },


	  routes: {
	    index: 'handlePlaylistPage',
	    login: 'handleLogInPage',
	    registration: 'handleRegistrationPage'
	  },
	  handlePlaylistPage: function handlePlaylistPage() {
	    var that = this;
	    this.playlists.safeFetch().done(function () {
	      var playlistPageView = new _playlistPageView.PlaylistPageView({
	        model: that.currentUser,
	        collection: that.playlists,
	        el: document.getElementsByTagName('body')[0]
	      });
	      playlistPageView.render();
	    });
	  },
	  handleLogInPage: function handleLogInPage() {
	    var logView = new _logInView.LogInView({
	      model: this.currentUser,
	      el: document.getElementsByTagName('body')[0]
	    });
	    logView.render();
	  },
	  handleRegistrationPage: function handleRegistrationPage() {
	    var registrationPageView = new _registrationView.RegistrationPageView({
	      el: document.getElementsByTagName('body')[0]
	    });
	    registrationPageView.render();
	  }
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistPageView = undefined;

	var _headerView = __webpack_require__(13);

	var _playlistsView = __webpack_require__(3);

	var PlaylistPageView = exports.PlaylistPageView = Backbone.View.extend({
	  renderTemplate: function renderTemplate(selectorString, options) {
	    var templateText = document.querySelector(selectorString).innerText;
	    var compiled = _.template(templateText);
	    if (options !== null) {
	      return compiled(options);
	    }
	    return compiled();
	  },
	  template: function template() {
	    return this.renderTemplate('#template-playlistPage');
	  },
	  render: function render() {
	    this.$el.html(this.template());

	    this.headerView = new _headerView.HeaderView({
	      model: this.model,
	      el: document.querySelector('.contaier')
	    });
	    this.playlist = new _playlistsView.PlaylistsView({
	      el: document.querySelector('#playlist1'),
	      collection: this.collection

	    });

	    this.headerView.render();
	    this.playlist.render();

	    return this;
	  }
	});

/***/ }
/******/ ]);