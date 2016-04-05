
import { ContainerPlaylistSongs } from '../Songs/containerPlaylistSongsView.js';

const PlaylistView = Backbone.View.extend({
  events: {
    'click .button_playlist': 'openSongView',
  },
  openSongView() {
    const containerSongs = new ContainerPlaylistSongs({
      model: this.model,
      el: document.querySelector('.pop_playlist'),
    });
    containerSongs.render();
  },

  renderTemplate(selectorString, options) {
    const templateText = document.querySelector(selectorString).innerText;
    const compiled = _.template(templateText);
    if (options !== null) {
      return compiled(options);
    }
    return compiled();
  },
  template(val) {
    return this.renderTemplate('#template-Playlist', val);
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});
export { PlaylistView } ;
