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
	
	var _views = __webpack_require__(1);
	
	$(_views.viewFunction);
	// import { SongsListView } from '../songs/songs-list-item-view.js';
	// import { PlayListsModels } from '../playlist/playlists-items-view.js';
	// import { PlayListsView }  from '../playlist/playlists-items-view.js';
	// import { buildingViews } from './views.js';

	// function renderSong() {
	//   const songObj = new Songs();
	//  songObj.render();
	// }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.viewFunction = undefined;
	
	var _songModel = __webpack_require__(2);
	
	var _songListItemView = __webpack_require__(3);
	
	var _songsListItemView = __webpack_require__(4);
	
	var _playlistModel = __webpack_require__(5);
	
	var _playlistItemView = __webpack_require__(6);
	
	var _playlistsItemsView = __webpack_require__(7);
	
	var _playlistAPI = __webpack_require__(8);
	
	var viewFunction = $(function () {
	
	    var playlistsJSON = '[{"id":0,"title":"Playlist 1","image":"../core/assets/up-all-night-small.png","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82},{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies pierdut","songAuthor":"Dr. Dre","songLength":186,"songListened":78},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money pierdut ea","songAuthor":"Andra","songLength":303,"songListened":94},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies el buletin ea","songAuthor":"Andra","songLength":359,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin el buletin love","songAuthor":"Eminem","songLength":312,"songListened":11},{"image":"../core/assets/2015-best-music.png","songTitle":"pierdut pierdut enemies ea","songAuthor":"Eminem","songLength":37,"songListened":9},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money enemies enemies","songAuthor":"Dr. Dre","songLength":325,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money el money","songAuthor":"Eminem","songLength":58,"songListened":10}]},{"id":1,"title":"Playlist 2","image":"../core/assets/up-all-night-small.png","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"money money love ea","songAuthor":"Dr. Dre","songLength":97,"songListened":100},{"image":"../core/assets/2015-best-music.png","songTitle":"el pierdut pierdut ea","songAuthor":"Smiley","songLength":42,"songListened":86},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money pierdut enemies","songAuthor":"Dr. Dre","songLength":454,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"money ea love buletin","songAuthor":"Dr. Dre","songLength":448,"songListened":16},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin pierdut ea el","songAuthor":"Dr. Dre","songLength":363,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"el love el buletin","songAuthor":"Smiley","songLength":88,"songListened":20}]},{"id":2,"title":"Playlist 3","image":"../core/assets/up-all-night-small.png","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"enemies enemies el love","songAuthor":"Smiley","songLength":192,"songListened":51},{"image":"../core/assets/2015-best-music.png","songTitle":"el enemies pierdut el","songAuthor":"Andra","songLength":232,"songListened":87},{"image":"../core/assets/2015-best-music.png","songTitle":"ea enemies pierdut enemies","songAuthor":"Smiley","songLength":234,"songListened":5},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies ea enemies buletin","songAuthor":"Andra","songLength":123,"songListened":45},{"image":"../core/assets/2015-best-music.png","songTitle":"love money buletin love","songAuthor":"Andra","songLength":299,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"el love ea love","songAuthor":"Andra","songLength":478,"songListened":34},{"image":"../core/assets/2015-best-music.png","songTitle":"ea el enemies money","songAuthor":"Dr. Dre","songLength":280,"songListened":35}]}]';
	
	    var songJSON = '{"image":"../core/assets/2015-best-music.png","name":"love love enemies pierdut","songAuthor":"Dr. Dre","songLength":186,"songListened":78}';
	
	    var song = new _songModel.SongModel(JSON.parse(songJSON));
	
	    var songView = new _songListItemView.SongListItemView({ model: song });
	    songView.render();
	    $('#page-content').append(songView.el);
	
	    var songsJSON = '[{\n    "image": "../core/assets/2015-best-music.png",\n    "name": "love love enemies love",\n    "songAuthor": "Smiley",\n    "songLength": 74,\n    "songListened": 82\n}, {\n    "image": "../core/assets/2015-best-music.png",\n    "name": "love love enemies pierdut",\n    "songAuthor": "Dr. Dre",\n    "songLength": 186,\n    "songListened": 78\n}, {\n    "image": "../core/assets/2015-best-music.png",\n    "name": "ea money pierdut ea",\n    "songAuthor": "Andra",\n    "songLength": 303,\n    "songListened": 94\n}, {\n    "image": "../core/assets/2015-best-music.png",\n    "name": "enemies el buletin ea",\n    "songAuthor": "Andra",\n    "songLength": 359,\n    "songListened": 23\n}, {\n    "image": "../core/assets/2015-best-music.png",\n    "name": "buletin el buletin love",\n    "songAuthor": "Eminem",\n    "songLength": 312,\n    "songListened": 11\n}, {\n    "image": "../core/assets/2015-best-music.png",\n    "name": "pierdut pierdut enemies ea",\n    "songAuthor": "Eminem",\n    "songLength": 37,\n    "songListened": 9\n}, {\n    "image": "../core/assets/2015-best-music.png",\n    "name": "ea money enemies enemies",\n    "songAuthor": "Dr. Dre",\n    "songLength": 325,\n    "songListened": 13\n}, {\n    "image": "../core/assets/2015-best-music.png",\n    "name": "enemies money el money",\n    "songAuthor": "Eminem",\n    "songLength": 58,\n    "songListened": 10\n}]';
	
	    // const playlistSong = new Songs(JSON.parse(songsJSON));
	    // const songsView = new SongsListView({ collection: playlistSong });
	    //   songsView.render();
	    //   $('#songs').append(songsView.el);
	
	    // const playlistJSON = `{
	    //       "id": 0,
	    //       "title": "Playlist 1",
	    //       "image": "../core/assets/up-all-night-small.png",
	    //       "id": 1,
	    //       "title": "Playlist 2",
	    //       "image": "../core/assets/up-all-night-small.png",
	    //       "id": 2,
	    //       "title": "Playlist 3",
	    //       "image": "../core/assets/up-all-night-small.png"
	    //   }`;
	
	    // const playlistItem = new PlayListModel(JSON.parse(playlistJSON));
	    // const playListView = new PlaylistItemView({ model: playlistItem });
	    // playListView.render();
	    // $('#playlist-content').append(playListView.el);
	    //
	    // const playlistSongs = new PlayListsModels(JSON.parse(playlistsJSON));
	    // const playListsView = new PlayListsView({ collection: playlistSongs });
	    // playListsView.render();
	    // $('#playlists-content').append(playListsView.el);
	
	    var playlistAPI = new _playlistAPI.PlayListCollection();
	    playlistAPI.fetch().done(function () {
	        var pageView = new _playlistsItemsView.PlayListsView({
	            el: document.getElementById('playlist-content'),
	            collection: playlistAPI
	        });
	        pageView.render();
	    });
	});
	
	exports.viewFunction = viewFunction;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SongModel = Backbone.Model.extend({});
	
	exports.SongModel = SongModel;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SongListItemView = Backbone.View.extend({
	  template: function tpl() {
	    var fn = _.template($('script#song-list-item').html());
	
	    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	      rest[_key] = arguments[_key];
	    }
	
	    return fn.apply(this, rest);
	  },
	  className: 'song-list-item',
	  render: function render() {
	    this.$el.html(this.template(this.model.attributes));
	    return this;
	  }
	});
	
	exports.SongListItemView = SongListItemView;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SongsListView = exports.Songs = undefined;
	
	var _songListItemView = __webpack_require__(3);
	
	var Songs = Backbone.Collection.extend({
	  model: _songListItemView.SongModel
	});
	
	var SongsListView = Backbone.View.extend({
	  className: 'songs',
	  render: function render() {
	    this.$el.html(this.template);
	    var that = this;
	    this.collection.forEach(function (model) {
	      var songView = new _songListItemView.SongListItemView({
	        model: model
	      });
	      that.el.appendChild(songView.render().el);
	    });
	  }
	});
	
	exports.Songs = Songs;
	exports.SongsListView = SongsListView;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PlayListModel = Backbone.Model.extend({});
	
	exports.PlayListModel = PlayListModel;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PlayListModel = Backbone.Model.extend({});
	
	var PlaylistItemView = Backbone.View.extend({
	  template: function template() {
	    var fn = _.template($("script#play-list-item").html());
	    return fn.apply(this, arguments);
	  },
	  className: 'play-list-item',
	  render: function render() {
	    this.$el.html(this.template(this.model.attributes));
	    return this;
	  }
	});
	
	exports.PlayListModel = PlayListModel;
	exports.PlaylistItemView = PlaylistItemView;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlayListsView = exports.PlayListsModels = undefined;
	
	var _playlistItemView = __webpack_require__(6);
	
	var _playlistModel = __webpack_require__(5);
	
	var PlayListsModels = Backbone.Collection.extend({
	  model: _playlistModel.PlayListModel
	});
	
	var PlayListsView = Backbone.View.extend({
	  className: 'playlists-view',
	  render: function render() {
	    this.$el.html(this.template);
	    var that = this;
	    this.collection.forEach(function (model) {
	      var item = new _playlistItemView.PlaylistItemView({
	        model: model
	      });
	      that.$el.append(item.render().el);
	    });
	  }
	});
	
	exports.PlayListsModels = PlayListsModels;
	exports.PlayListsView = PlayListsView;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlayListCollection = undefined;
	
	var _playlistModel = __webpack_require__(5);
	
	var _songModel = __webpack_require__(2);
	
	var PlayListCollection = Backbone.Collection.extend({
	  model: _playlistModel.PlayListModel,
	  url: 'http://localhost:3000/playlists',
	  parse: function parse(response) {
	    return response.map(function (val) {
	      var parsedElementPlaylist = new _playlistModel.PlayListModel(val);
	      console.log(parsedElementPlaylist);
	      return parsedElementPlaylist;
	    });
	  }
	});
	
	exports.PlayListCollection = PlayListCollection;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map