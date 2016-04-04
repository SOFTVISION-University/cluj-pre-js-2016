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

	var _playlistCollection = __webpack_require__(2);

	var _playlistsView = __webpack_require__(4);

	var _logInView = __webpack_require__(11);

	var _userObj = __webpack_require__(13);

	var _userModel = __webpack_require__(12);

	var _headerView = __webpack_require__(14);

	$(function () {
	  var userModel = new _userModel.UserModel();
	  var logView = new _logInView.LogInView({
	    model: userModel,
	    el: document.getElementById('logIn')
	  });
	  logView.render();
	  var headerView = new _headerView.HeaderView({
	    model: userModel,
	    el: document.getElementById('container')
	  });
	  headerView.render();
	  var playlists = new _playlistCollection.PlaylistsCollection();
	  playlists.fetch().done(function () {
	    var playlist = new _playlistsView.PlaylistsView({
	      el: document.getElementById('playlist1'),
	      collection: playlists

	    });

	    playlist.render();
	  });
	});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistsCollection = undefined;

	var _playlistModel = __webpack_require__(3);

	var PlaylistsCollection = Backbone.Collection.extend({
	  model: _playlistModel.PlaylistModel,
	  url: 'http://localhost:3000/playlists',
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
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistsView = undefined;

	var _playlistView = __webpack_require__(5);

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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistView = undefined;

	var _songsCollection = __webpack_require__(6);

	var _songsView = __webpack_require__(8);

	var _headerPlaylist = __webpack_require__(10);

	function closePlaylist() {
	  var x = document.getElementById('pop_playlist1');
	  x.style.transition = '0.5s';
	  x.style.height = '0px';
	  var list = document.getElementById('name_songs');
	  while (list.hasChildNodes()) {
	    list.removeChild(list.firstChild);
	  }
	}

	function openPlaylist() {
	  var x = document.getElementById('pop_playlist1');
	  x.style.transition = '0.5s';
	  x.style.height = '800px';
	}
	function newSongsView(model) {
	  var songs = new _songsCollection.SongsListColection();
	  songs.set(model);

	  var pageView = new _songsView.SongsView({
	    el: document.getElementById('name_songs'),
	    collection: songs
	  });
	  pageView.render();
	}

	var PlaylistView = Backbone.View.extend({
	  events: {
	    'click .button_playlist': 'openSongView'
	  },
	  openSongView: function openSongView() {
	    closePlaylist();
	    newSongsView(this.model.attributes.songs);
	    openPlaylist();
	    var head = new _headerPlaylist.HeaderView({
	      el: document.getElementById('footer_playlist'),
	      model: this.model
	    });
	    head.render();
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SongsListColection = undefined;

	var _songModel = __webpack_require__(7);

	var SongsListColection = Backbone.Collection.extend({
	  model: _songModel.SongModel
	});
	exports.SongsListColection = SongsListColection;

/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SongsView = undefined;

	var _songView = __webpack_require__(9);

	var SongsView = Backbone.View.extend({
	  events: {
	    'click ': 'deleteSongsView'
	  },
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
	  },
	  deleteSongsView: function deleteSongsView() {
	    this.model.remove();
	  }
	});
	exports.SongsView = SongsView;

/***/ },
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LogInView = undefined;

	var _userObj = __webpack_require__(13);

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
	    var that = this;
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
	      that.model.set(_userObj.user);
	      that.model.triggerEventOnHeader();
	    });
	  }
	});

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	  }
	});

/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HeaderView = undefined;

	var _logOutButtonView = __webpack_require__(15);

	var HeaderView = exports.HeaderView = Backbone.View.extend({
	  initialize: function initialize() {
	    this.logOutButtonView = new _logOutButtonView.LogOutButtonView({
	      model: this.model,
	      el: document.getElementById('right')
	    });
	  },
	  render: function render() {
	    this.logOutButtonView.render();
	    this.listenTo(this.model, 'triggerHead', function () {
	      var imageBackground = this.model.get('backgroundColor');
	      document.querySelector('.container').style.backgroundImage = 'url(' + imageBackground + ')';
	    });
	  }
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LogOutButtonView = undefined;

	var _userModel = __webpack_require__(12);

	var LogOutButtonView = exports.LogOutButtonView = Backbone.View.extend({
	  events: {
	    'click #logOut ': 'logOutFunction'
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
	    return this.renderTemplate('#template-logOutButton');
	  },
	  render: function render() {
	    this.$el.html(this.template());
	    return this;
	  },
	  logOutFunction: function logOutFunction() {
	    $.ajax({
	      type: 'POST',
	      url: 'http://localhost:3000/logout',
	      data: _userModel.user.token,
	      dataType: 'json',
	      contentType: 'application/json'
	    }).done(function (data) {
	      console.log("logOut");
	    });
	  }
	});

/***/ }
/******/ ]);