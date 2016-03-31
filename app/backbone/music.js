import { SongCollection } from './Song/SongCollection.js';
import { SongsListView } from './Song/SongsListView.js';

var songsJSON = '[{"image":"/home/robert.cosma/work/cluj-pre-js-2016/core/assets/2015-best-music.png","name":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82},{"image":"/home/robert.cosma/work/cluj-pre-js-2016/core/assets/2015-best-music.png","name":"love love enemies pierdut","songAuthor":"Dr. Dre","songLength":186,"songListened":78},{"image":"/home/robert.cosma/work/cluj-pre-js-2016/core/assets/2015-best-music.png","name":"ea money pierdut ea","songAuthor":"Andra","songLength":303,"songListened":94},{"image":"/home/robert.cosma/work/cluj-pre-js-2016/core/assets/2015-best-music.png","name":"enemies el buletin ea","songAuthor":"Andra","songLength":359,"songListened":23},{"image":"/home/robert.cosma/work/cluj-pre-js-2016/core/assets/2015-best-music.png","name":"buletin el buletin love","songAuthor":"Eminem","songLength":312,"songListened":11},{"image":"/home/robert.cosma/work/cluj-pre-js-2016/core/assets/2015-best-music.png","name":"pierdut pierdut enemies ea","songAuthor":"Eminem","songLength":37,"songListened":9},{"image":"/home/robert.cosma/work/cluj-pre-js-2016/core/assets/2015-best-music.png","name":"ea money enemies enemies","songAuthor":"Dr. Dre","songLength":325,"songListened":13},{"image":"/home/robert.cosma/work/cluj-pre-js-2016/core/assets/2015-best-music.png","name":"enemies money el money","songAuthor":"Eminem","songLength":58,"songListened":10}]';

var playlist_songs = new SongCollection(JSON.parse(songsJSON));
var songsView = new SongsListView({collection: playlist_songs});
songsView.render();
$('#songs').append(songsView.el);
