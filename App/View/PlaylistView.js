import { PlaylistSongsView } from './PlaylistSongsView.js';

const PlaylistCardView = Backbone.View.extend({
  events: {
    'click .viewPlayList': 'onClickExplorePlaylist',
  },
  onClickExplorePlaylist() {
    if(1 === 0) {
      // closePlaylistSongsPannel();
    }
    else {
      const currentPlaylist = this.model.attributes;
      const playlistSongsHolder = document.createElement('div');
      playlistSongsHolder.id = 'songs-holder';
      const playListDiv = document.getElementById('playList');
      playListDiv.appendChild(playlistSongsHolder);
      const playlistSongsView = new PlaylistSongsView({
        el: playlistSongsHolder,
        model: currentPlaylist,
      });
      playlistSongsView.render();
    }
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

export { PlaylistCardView };
// export { closePlaylistSongsPannel };
