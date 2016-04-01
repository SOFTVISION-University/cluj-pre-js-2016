import { PlaylistCollection } from './playlist/playlist-collection.js';
import { PlaylistsView } from './playlist/playlists-view.js';


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
  const playlists = new PlaylistCollection();
  playlists.fetch().done(() => {
    const pageView = new PlaylistsView({
      el: document.getElementById('page'),
      collection: playlists,
    });
    pageView.render();
  });
}
