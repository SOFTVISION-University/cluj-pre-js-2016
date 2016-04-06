// import { SongModel } from './Song/SongModel.js';


const SongCollection = Backbone.Collection.extend({
  model: SongModel,
  url: 'http://localhost:3000/playlists',
  parse(response) {
	for( var i = 0; i < 10; i++){
	var Div = document.getElementById("songs");
	var Clone = Div.cloneNode(true);
	plst.appendChild(Clone);
  document.getElementById('songs').innerHTML = response[i].title;

  console.log(response[i]);
	}
  },
});

const SongsCollection = new SongCollection();
SongsCollection.fetch({
  success(SongsCollection){
		console.log(SongsCollection.toJSON());
	}
});

// export { SongCollection };
