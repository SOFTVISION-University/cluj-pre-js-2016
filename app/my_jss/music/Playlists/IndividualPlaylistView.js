import { PlaylistView } from '../Songs/PlaylistView.js';
import { PlaylistModel } from '../Songs/PlaylistModel.js';

const IndividualPlaylistView = Backbone.View.extend({
  className: 'playlists-container',
  template() {
    const templateText = document.querySelector(`script#${this.className}`).innerText;
    const compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  _renderPlaylistView(data) {
    const playlistViewBig = new PlaylistView({
      el: document.getElementById('playlistAbsolut'),
      model: data,
    });
    playlistViewBig.render();
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  events: {
    'click .individual-playlist-button': '_handlePlaylistOpen',
  },
  _handlePlaylistOpen() {
    this._renderPlaylistView(this.model);
  },
});

export { IndividualPlaylistView };
