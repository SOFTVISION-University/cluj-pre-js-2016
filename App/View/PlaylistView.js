import { SongCollectionView } from './SongCollectionView.js';
import { PlaylistHeaderView } from './PlaylistHeaderView.js';

function drawSonsCollectionView(selectedPlaylist) {
  const songCollectionView = new SongCollectionView({
    el: document.getElementById('songsHolder'),
    collection: selectedPlaylist,
  });
  songCollectionView.render();
}

function drawPlayListHeader(playListObject) {
  const playListHeaderView = new PlaylistHeaderView({
    el: document.getElementById('playList'),
    model: playListObject,
  });
  playListHeaderView.render();
  const platListDiv = document.getElementById('playList');
  platListDiv.className = 'showPlayList';
  platListDiv.style.visibility = 'visible';
  platListDiv.style.transition = '0.5s';
  platListDiv.style.height = '400px';
}

function showPlaylist(playlist) {
  const selectedPlaylist = playlist.songs;
  drawPlayListHeader(playlist);
  drawSonsCollectionView(selectedPlaylist);
}

const PlaylistView = Backbone.View.extend({
  events: {
    click: 'onClickExplorePlaylist',
  },
  onClickExplorePlaylist() {
    showPlaylist(this.model.attributes);
  },
  className: 'playlistCl',
  template(values) {
    const templateText = document.querySelector('#playlist-item').innerText;
    const compiled = _.template(templateText);
    if (values !== null) {
      return compiled(values);
    }
    return compiled();
  },
  render() {
    this.$el.append(this.template(this.model.attributes));
    return this;
  },
});

export { PlaylistView };
