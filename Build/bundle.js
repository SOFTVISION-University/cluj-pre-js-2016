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
	
	var _Router = __webpack_require__(21);
	
	window.app = {};
	document.addEventListener('DOMContentLoaded', function () {
	  var appRouter = new _Router.AppRouter();
	  Backbone.history.start();
	  window.app = appRouter;
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var LoginView = Backbone.View.extend({
	  template: function template(values) {
	    var templateText = document.querySelector('#login-user').innerText;
	    var compiled = _.template(templateText);
	    if (values !== null) {
	      return compiled(values);
	    }
	    return compiled();
	  },
	
	  events: {
	    'click #login-button': 'logIn'
	  },
	  render: function render() {
	    this.$el.append(this.template(this.model));
	    return this;
	  },
	  logIn: function logIn() {
	    this.model.logIn();
	  }
	});
	
	exports.LoginView = LoginView;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function CurrentUser() {
	  this.userHeaderImage = '../core/assets/banner-app.jpg';
	  this.fullName = '';
	  this.isLogged = false;
	  this.token = '';
	}
	CurrentUser._instance = null;
	CurrentUser.getInstance = function () {
	  if (CurrentUser._instance === null) {
	    CurrentUser._instance = new CurrentUser();
	  }
	  return CurrentUser._instance;
	};
	
	CurrentUser.prototype.reset = function () {
	  this.userHeaderImage = '../core/assets/banner-app.jpg';
	  this.fullName = '';
	  this.isLogged = false;
	  this.token = '';
	};
	
	CurrentUser.prototype.setUserHeaderImage = function (headerImg) {
	  this.userHeaderImage = headerImg;
	};
	CurrentUser.prototype.setFullName = function (fullname) {
	  this.fullName = fullname;
	};
	CurrentUser.prototype.setIsLogged = function (isLogged) {
	  this.isLogged = isLogged;
	};
	CurrentUser.prototype.setToken = function (token) {
	  this.token = token;
	};
	
	CurrentUser.prototype.getUserHeaderImage = function () {
	  return this.userHeaderImage;
	};
	CurrentUser.prototype.getFullName = function () {
	  return this.fullName;
	};
	CurrentUser.prototype.getIsLogged = function () {
	  return this.isLogged;
	};
	CurrentUser.prototype.getToken = function () {
	  return this.token;
	};
	
	exports.CurrentUser = CurrentUser;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HeaderView = undefined;
	
	var _LoginStatusView = __webpack_require__(18);
	
	var _UserModel = __webpack_require__(17);
	
	var _CurrentUser = __webpack_require__(6);
	
	var HeaderView = Backbone.View.extend({
	  events: {
	    'click #joinButton': 'goToSignUp'
	  },
	  template: function template(values) {
	    var templateText = document.querySelector('#header-template').innerText;
	    var compiled = _.template(templateText);
	    if (values !== null) {
	      return compiled(values);
	    }
	    return compiled();
	  },
	  goToSignUp: function goToSignUp() {
	    console.log("click");
	    Backbone.trigger('deletePlaylistPage');
	    window.app.navigate('signup', true);
	  },
	  render: function render() {
	    this.$el.append(this.template(this));
	    var headerDiv = document.getElementsByClassName('headerDiv')[0];
	    headerDiv.style.backgroundImage = 'url( ' + _CurrentUser.CurrentUser.getInstance().getUserHeaderImage() + ' )';
	    var loginStatusView = new _LoginStatusView.LoginStatusView({
	      model: new _UserModel.UserModel(),
	      el: document.getElementById('login-button-div')
	    });
	    loginStatusView.render();
	    this.model.addToNestedView(loginStatusView);
	    return this;
	  }
	});
	
	exports.HeaderView = HeaderView;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistCollection = undefined;
	
	var _PlaylistModel = __webpack_require__(9);
	
	var PlaylistCollection = Backbone.Collection.extend({
	  model: _PlaylistModel.PlaylistModel,
	  url: 'http://localhost:3000/playlists',
	  parse: function parse(resp) {
	    return resp.map(function (playlist) {
	      var model = new _PlaylistModel.PlaylistModel();
	      model.set(playlist);
	      // debugger;
	      return model;
	    });
	  }
	});
	exports.PlaylistCollection = PlaylistCollection;

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistCollectionView = undefined;
	
	var _PlaylistView = __webpack_require__(11);
	
	var PlaylistCollectionView = Backbone.View.extend({
	  render: function render() {
	    var collView = this;
	    this.collection.forEach(function (model) {
	      var playlistView = new _PlaylistView.PlaylistCardView({
	        model: model
	      });
	      collView.el.appendChild(playlistView.render().el);
	    });
	  }
	});
	exports.PlaylistCollectionView = PlaylistCollectionView;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistCardView = undefined;
	
	var _PlaylistSongsView = __webpack_require__(12);
	
	var PlaylistCardView = Backbone.View.extend({
	  events: {
	    'click .viewPlayList': 'onClickExplorePlaylist'
	  },
	  onClickExplorePlaylist: function onClickExplorePlaylist() {
	    if (false) {
	      // closePlaylistSongsPannel();
	    } else {
	        Backbone.trigger('closePlaylist');
	        var currentPlaylist = this.model.attributes;
	        var playlistSongsHolder = document.createElement('div');
	        playlistSongsHolder.id = 'songs-holder';
	        playlistSongsHolder.style.width = '800px';
	        var playListDiv = document.getElementById('playlist-div');
	        playlistSongsHolder.className = 'playlist-class';
	
	        playListDiv.appendChild(playlistSongsHolder);
	        var playlistSongsView = new _PlaylistSongsView.PlaylistSongsView({
	          el: playlistSongsHolder,
	          model: currentPlaylist
	        });
	        playlistSongsView.render();
	      }
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
	
	exports.PlaylistCardView = PlaylistCardView;
	// export { closePlaylistSongsPannel };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistSongsView = undefined;
	
	var _PlaylistHeaderView = __webpack_require__(13);
	
	var _SongCollectionView = __webpack_require__(14);
	
	var PlaylistSongsView = Backbone.View.extend({
	  initialize: function initialize() {
	    this.listenTo(Backbone, 'closePlaylist', this.closeThePlaylist);
	  },
	  events: {
	    'click #closeImg': 'closeThePlaylist'
	  },
	  closeThePlaylist: function closeThePlaylist() {
	    var platListDiv = document.getElementById('songs-holder');
	    platListDiv.classList.remove('showAnim');
	    platListDiv.classList.add('hideAnim');
	    platListDiv.addEventListener('animationend', animationHideEnd);
	    platListDiv.myParam = this;
	  },
	  render: function render() {
	    console.log('render');
	    var playlistSongsView = this;
	    var playListHeaderView = new _PlaylistHeaderView.PlaylistHeaderView({
	      el: playlistSongsView.el,
	      model: playlistSongsView.model
	    });
	    playListHeaderView.render();
	    var songCollectionView = new _SongCollectionView.SongCollectionView({
	      el: playlistSongsView.el,
	      collection: playlistSongsView.model.songs
	    });
	    songCollectionView.render();
	    var platListDiv = document.getElementById('songs-holder');
	    platListDiv.classList.add('showAnim');
	    platListDiv.addEventListener('animationend', animationShowEnd);
	  }
	});
	
	function animationHideEnd(evt) {
	  var platListDiv = document.getElementById('songs-holder');
	  platListDiv.removeEventListener('animationend', animationHideEnd);
	  platListDiv.style.height = '0px';
	  evt.target.myParam.remove();
	  console.log('endhide');
	}
	
	function animationShowEnd() {
	  var platListDiv = document.getElementById('songs-holder');
	  platListDiv.removeEventListener('animationend', animationShowEnd);
	  // platListDiv.className = '';
	  platListDiv.style.height = '400px';
	}
	exports.PlaylistSongsView = PlaylistSongsView;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// import { closePlaylistSongsPannel } from './PlaylistView';
	var PlaylistHeaderView = Backbone.View.extend({
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SongCollectionView = undefined;
	
	var _SongView = __webpack_require__(15);
	
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
/* 15 */
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
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserModel = undefined;
	
	var _CurrentUser = __webpack_require__(6);
	
	// import { app } from '../entry.js';
	var UserModel = Backbone.Model.extend({
	  logIn: function logIn() {
	    var user = {};
	    user.username = document.getElementById('username').value;
	    user.password = document.getElementById('password').value;
	    $.ajax({
	      url: 'http://localhost:3000/auth',
	      type: 'POST',
	      data: JSON.stringify(user),
	      dataType: 'json',
	      contentType: 'application/json'
	    }).done(function (token) {
	      _CurrentUser.CurrentUser.getInstance().setToken(token);
	      $.ajax({
	        url: 'http://localhost:3000/preferences',
	        headers: {
	          'x-token': token
	        }
	      }).done(function (data) {
	        var userPreferences = JSON.parse(data);
	        _CurrentUser.CurrentUser.getInstance().setUserHeaderImage(userPreferences.gsx$background.$t);
	        _CurrentUser.CurrentUser.getInstance().setFullName(userPreferences.gsx$fullname.$t);
	        _CurrentUser.CurrentUser.getInstance().setIsLogged(true);
	        Backbone.trigger('changeUserStatus');
	        Backbone.trigger('deleteLoginPage');
	        window.app.navigate('playlists', true);
	      });
	    });
	  },
	  logOut: function logOut() {
	    debugger;
	    $.ajax({
	      url: 'http://localhost:3000/logout',
	      type: 'POST',
	      headers: {
	        'x-token': _CurrentUser.CurrentUser.getInstance().getToken()
	      }
	    }).done(function (data) {
	      console.log(data);
	      _CurrentUser.CurrentUser.getInstance().reset();
	      Backbone.trigger('changeUserStatus');
	    });
	  }
	});
	exports.UserModel = UserModel;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LoginStatusView = undefined;
	
	var _CurrentUser = __webpack_require__(6);
	
	var LoginStatusView = Backbone.View.extend({
	  initialize: function initialize() {
	    this.listenTo(Backbone, 'changeUserStatus', this.render);
	  },
	  events: {
	    'click #log-out-button': 'logOut',
	    'click #log-in-button': 'goToLogIn'
	  },
	  viewTemplate: '',
	  fullName: '',
	  template: function template(values) {
	    var templateText = document.querySelector('#' + this.viewTemplate).innerText;
	    var compiled = _.template(templateText);
	    if (values !== null) {
	      return compiled(values);
	    }
	    return compiled();
	  },
	  logOut: function logOut() {
	    this.model.logOut();
	  },
	  goToLogIn: function goToLogIn() {
	    Backbone.trigger('deletePlaylistPage');
	    window.app.navigate('login', true);
	  },
	  render: function render() {
	    this.el.innerHTML = '';
	    if (_CurrentUser.CurrentUser.getInstance().getIsLogged()) {
	      this.fullName = _CurrentUser.CurrentUser.getInstance().getFullName();
	      this.viewTemplate = 'logout-template';
	      var headerDiv = document.getElementsByClassName('headerDiv')[0];
	      headerDiv.style.backgroundImage = 'url( ' + _CurrentUser.CurrentUser.getInstance().getUserHeaderImage() + ' )';
	    } else {
	      this.viewTemplate = 'login-template';
	      var _headerDiv = document.getElementsByClassName('headerDiv')[0];
	      _headerDiv.style.backgroundImage = 'url(../core/assets/banner-app.jpg)';
	    }
	    this.$el.append(this.template(this));
	    return this;
	  }
	});
	
	exports.LoginStatusView = LoginStatusView;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SignUpView = Backbone.View.extend({
	  template: function template(values) {
	    var templateText = document.querySelector('#sign-up-template').innerText;
	    var compiled = _.template(templateText);
	    if (values !== null) {
	      return compiled(values);
	    }
	    return compiled();
	  },
	  render: function render() {
	    this.$el.append(this.template(this));
	    return this;
	  }
	});
	
	exports.SignUpView = SignUpView;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaylistPageView = undefined;
	
	var _HeaderView = __webpack_require__(7);
	
	var _PlaylistCollection = __webpack_require__(8);
	
	var _PlaylistCollectionView = __webpack_require__(10);
	
	var PlaylistPageView = Backbone.View.extend({
	  initialize: function initialize() {
	    this.listenTo(Backbone, 'deletePlaylistPage', this.deleteThis);
	  },
	
	  nestedViews: [],
	  addToNestedView: function addToNestedView(view) {
	    this.nestedViews.push(view);
	  },
	  deleteThis: function deleteThis() {
	    this.nestedViews.forEach(this.removeView);
	  },
	  removeView: function removeView(view) {
	    view.remove();
	  },
	  template: function template(values) {
	    var templateText = document.querySelector('#playlist-page-template').innerText;
	    var compiled = _.template(templateText);
	    if (values !== null) {
	      return compiled(values);
	    }
	    return compiled();
	  },
	  render: function render() {
	    this.$el.append(this.template(this.model));
	    var headerView = new _HeaderView.HeaderView({
	      model: this,
	      el: document.getElementById('header-div')
	    });
	    headerView.render();
	    this.addToNestedView(headerView);
	    var playlistPV = this;
	    var playlistCollection = new _PlaylistCollection.PlaylistCollection();
	    playlistCollection.fetch().done(function () {
	      var playlistsHolder = document.getElementById('playlist-holder');
	      var playlistCollectionView = new _PlaylistCollectionView.PlaylistCollectionView({
	        el: playlistsHolder,
	        collection: playlistCollection
	      });
	      playlistCollectionView.render();
	      playlistPV.addToNestedView(playlistCollectionView);
	    });
	    debugger;
	    return this;
	  }
	});
	
	exports.PlaylistPageView = PlaylistPageView;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AppRouter = undefined;
	
	var _PlaylistPageView = __webpack_require__(20);
	
	var _LoginPageView = __webpack_require__(22);
	
	var _SignUpPageView = __webpack_require__(23);
	
	var AppRouter = Backbone.Router.extend({
	  playListCollection: '',
	  currentUser: '',
	  routes: {
	    playlists: 'showPlaylistPage',
	    login: 'showLoginPage',
	    signup: 'showSignUpPage'
	  },
	  setCurrentUser: function setCurrentUser(user) {
	    this.currentUser = user;
	  },
	  setPlaylistCollection: function setPlaylistCollection(playlistCollection) {
	    this.playListCollection = playlistCollection;
	  },
	  getPlaylistCollection: function getPlaylistCollection() {
	    return this.playListCollection;
	  },
	
	  showPlaylistPage: function showPlaylistPage() {
	    var playlistPageView = new _PlaylistPageView.PlaylistPageView({
	      el: document.getElementsByTagName('body')[0]
	    });
	    playlistPageView.render();
	  },
	  showLoginPage: function showLoginPage() {
	    var loginPageView = new _LoginPageView.LoginPageView({
	      el: document.getElementsByTagName('body')[0]
	    });
	    loginPageView.render();
	  },
	  showSignUpPage: function showSignUpPage() {
	    var signUpPageView = new _SignUpPageView.SignUpPageView({
	      el: document.getElementsByTagName('body')[0]
	    });
	    signUpPageView.render();
	  }
	});
	exports.AppRouter = AppRouter;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LoginPageView = undefined;
	
	var _LoginView = __webpack_require__(5);
	
	var _UserModel = __webpack_require__(17);
	
	var LoginPageView = Backbone.View.extend({
	  initialize: function initialize() {
	    this.listenTo(Backbone, 'deleteLoginPage', this.deleteThis);
	  },
	
	  nestedViews: [],
	  nestedView: function nestedView(view) {
	    this.nestedViews.push(view);
	  },
	  deleteThis: function deleteThis() {
	    this.nestedViews.forEach(this.removeView);
	  },
	  removeView: function removeView(view) {
	    view.remove();
	  },
	  template: function template(values) {
	    var templateText = document.querySelector('#login-page-template').innerText;
	    var compiled = _.template(templateText);
	    if (values !== null) {
	      return compiled(values);
	    }
	    return compiled();
	  },
	  render: function render() {
	    debugger;
	    this.$el.append(this.template(this.model));
	    var loginView = new _LoginView.LoginView({
	      model: new _UserModel.UserModel(),
	      el: document.getElementById('login-div')
	    });
	    loginView.render();
	    this.nestedView(loginView);
	    return this;
	  }
	});
	
	exports.LoginPageView = LoginPageView;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SignUpPageView = undefined;
	
	var _SignUpView = __webpack_require__(19);
	
	var SignUpPageView = Backbone.View.extend({
	  template: function template(values) {
	    var templateText = document.querySelector('#signup-page-template').innerText;
	    var compiled = _.template(templateText);
	    if (values !== null) {
	      return compiled(values);
	    }
	    return compiled();
	  },
	  render: function render() {
	    debugger;
	    this.$el.append(this.template(this.model));
	    var signUpView = new _SignUpView.SignUpView({
	      el: document.getElementsByClassName('sign-up-div')[0]
	    });
	    signUpView.render();
	    return this;
	  }
	});
	
	exports.SignUpPageView = SignUpPageView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map