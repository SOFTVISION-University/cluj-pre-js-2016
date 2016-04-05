import { SongsCollection } from './song/SongsCollection.js';
import { PlaylistModel } from './playlist/PlaylistModel.js';
import { PlaylistsCollection } from './playlist/PlaylistsCollection.js';
import { HomepageView } from './app/homepageView.js';
import { PlaylistsListView } from './playlist/playlistsListView.js';


export function startApp() {
  const mockSongs = [
    {
      songTitle: 'song 1',
      songAuthor: 'author 1',
      songLength: '1:03',
      songListened: 2,
      img: null,
    },
    {
      songTitle: 'song 2',
      songAuthor: 'author 1',
      songLength: '1:03',
      songListened: 2,
      img: null,
    },
    {
      songTitle: 'song 3',
      songAuthor: 'author 1',
      songLength: '1:03',
      songListened: 2,
      img: null,
    },
  ];

  const mockPlaylists = [
    {
      id: 0,
      title: 'title playlist 1',
      imgSmall: '../core/assets/up-all-night-small.png',
      imgBig: '../core/assets/up-all-night.png',
      description: 'playlist 1 descritpion',
    },
    {
      id: 1,
      title: 'title playlist 2',
      imgSmall: '../core/assets/up-all-night-small.png',
      imgBig: '../core/assets/up-all-night.png',
      description: 'playlist 2 descritpion',
    },
    {
      id: 2,
      title: 'title playlist 3',
      imgSmall: '../core/assets/up-all-night-small.png',
      imgBig: '../core/assets/up-all-night.png',
      description: 'playlist 3 descritpion',
    },
    {
      id: 3,
      title: 'title playlist 4',
      imgSmall: '../core/assets/up-all-night-small.png',
      imgBig: '../core/assets/up-all-night.png',
      description: 'playlist 4 descritpion',
    },
  ];

  const songsList = new SongsCollection(mockSongs);

  const playlistsList = new PlaylistsCollection();
  const playlistsJSON = new PlaylistsCollection();

  playlistsJSON.fetch({
    success: () => {
      const playlistsView = new PlaylistsListView({
        el: document.getElementsByClassName('music-container'),
        collection: playlistsJSON,
      });
      playlistsView.render();
    },
    error: (errorResponse) => {
      console.log(errorResponse);
    },
  });

  const homepageViewItem = new HomepageView({
    el: $('#page')[0],
    songsList: songsList,
    playlistsList: playlistsList,
  });
  homepageViewItem.render();
}
