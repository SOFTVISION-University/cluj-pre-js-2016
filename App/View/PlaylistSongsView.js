import { PlaylistHeaderView } from './PlaylistHeaderView.js';
import { SongCollectionView } from './SongCollectionView.js';

const PlaylistSongsView = Backbone.View.extend({
  events: {
    'click #closeImg': 'closeThePlaylist'
  },
  closeThePlaylist() {
    const platListDiv = document.getElementById('playList');
    platListDiv.className = 'hideAnim';
    platListDiv.addEventListener('animationend', animationHideEnd);
    platListDiv.myParam = this;
  },
  render() {
    debugger;
    const playlistSongsView = this;
    const playListHeaderView = new PlaylistHeaderView({
      el: playlistSongsView.el,
      model: playlistSongsView.model,
    });
    playListHeaderView.render();
    const songCollectionView = new SongCollectionView({
      el: playlistSongsView.el,
      collection: playlistSongsView.model.songs,
    });
    songCollectionView.render();
    const platListDiv = document.getElementById('playList');
    platListDiv.className = 'showAnim';
    platListDiv.addEventListener('animationend', animationShowEnd);
  },
});

function animationHideEnd(evt) {
  const platListDiv = document.getElementById('playList');
  platListDiv.removeEventListener('animationend', animationHideEnd);
  platListDiv.style.height = '0px';
  evt.target.myParam.remove();
}

function animationShowEnd() {
  const platListDiv = document.getElementById('playList');
  platListDiv.removeEventListener('animationend', animationShowEnd);
  platListDiv.className = '';
  platListDiv.style.height = '400px';
}
export { PlaylistSongsView };
