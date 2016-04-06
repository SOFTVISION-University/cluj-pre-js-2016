import { PlaylistView } from '../views/playlist-view.js';
const PlaylistsView = Backbone.View.extend({
  renderTemplate(selectorString, options) {
    const templateText = document.querySelector(selectorString).innerText;
    const compiled = _.template(templateText);
    if (options !== null) {
      return compiled(options);
    }
    return compiled();
  },
  template() {
    return this.renderTemplate('#template-PlaylistsView');
  },
  _nestedView: [],
  renderNestedView(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render() {
    this.$el.html(this.template());
    const that = this;
    const playlistEl = $(this.el.querySelector('.playlists-view'));
    this.collection.forEach((model) => {
      const playlistView = new PlaylistView({
        model,
      });
      playlistView.render();
      that.renderNestedView(playlistView, playlistEl);
    });
  },
});

export { PlaylistsView };
