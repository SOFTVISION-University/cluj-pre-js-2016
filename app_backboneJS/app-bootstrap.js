import { PlaylistCollection } from './playlist/playlist-collection.js';
import { PlaylistsView } from './playlist/playlists-view.js';
import { SongsCollection } from './song/song-collection.js';
import { SongsListView } from './song/song-list-view.js';

export function startApp() {
  const listOfPlaylists = [
    {
      id: 1,
      title: 'Playlist1',
      songs: [
        {
          image: '../core/assets/2015-best-music.png',
          songTitle: 'love love enemies love',
          songAuthor: 'Smiley',
          songLength: 74,
          songListened: 82,
        },
        {
          image: '../core/assets/2015-best-music.png',
          songTitle: 'love love enemies pierdut',
          songAuthor: 'Dr. Dre',
          songLength: 186,
          songListened: 78,
        },
      ],
      imageLarge: '../core/assets/up-all-night.png',
      imageSmall: '../core/assets/up-all-night.png',
      description: 'Lorem ipsum1',
    },
    {
      id: 2,
      title: 'Playlist2',
      songs: [
        {
          image: '../core/assets/2015-best-music.png',
          songTitle: 'love love enemies love',
          songAuthor: 'Smiley',
          songLength: 74,
          songListened: 82,
        },
        {
          image: '../core/assets/2015-best-music.png',
          songTitle: 'love love enemies pierdut',
          songAuthor: 'Dr. Dre',
          songLength: 186,
          songListened: 78,
        },
      ],
      imageLarge: '../core/assets/up-all-night.png',
      imageSmall: '../core/assets/up-all-night.png',
      description: 'Lorem ipsum2',
    },
    {
      id: 3,
      title: 'Playlist3',
      songs: [
        {
          image: '../core/assets/2015-best-music.png',
          songTitle: 'love love enemies love',
          songAuthor: 'Smiley',
          songLength: 74,
          songListened: 82,
        },
        {
          image: '../core/assets/2015-best-music.png',
          songTitle: 'love love enemies pierdut',
          songAuthor: 'Dr. Dre',
          songLength: 186,
          songListened: 78,
        },
      ],
      imageLarge: '../core/assets/up-all-night.png',
      imageSmall: '../core/assets/up-all-night.png',
      description: 'Lorem ipsum3',
    },
    {
      id: 4,
      title: 'Playlist4',
      songs: [
        {
          image: '../core/assets/2015-best-music.png',
          songTitle: 'love love enemies love',
          songAuthor: 'Smiley',
          songLength: 74,
          songListened: 82,
        },
        {
          image: '../core/assets/2015-best-music.png',
          songTitle: 'love love enemies pierdut',
          songAuthor: 'Dr. Dre',
          songLength: 186,
          songListened: 78,
        },
      ],
      imageLarge: '../core/assets/up-all-night.png',
      imageSmall: '../core/assets/up-all-night.png',
      description: 'Lorem ipsum4',
    },
  ];

  // const playlist = new Playlist();
  const playlists = new PlaylistCollection();
  playlists.set(listOfPlaylists);

  const songsList = new SongsCollection();
  songsList.set(listOfPlaylists[0].songs);

  console.log(playlists);
  console.log(songsList);

  const pageView = new PlaylistsView({
    el: document.getElementById('page'),
    collection: playlists,
  });
  // const songListView = new SongsListView({
  //   el: document.getElementById('container-list-of-songs'),
  //   collection: songsList,
  // });
  //
  // songListView.render();
  pageView.render();
}
