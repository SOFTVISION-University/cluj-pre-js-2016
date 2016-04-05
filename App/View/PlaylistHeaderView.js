// import { closePlaylistSongsPannel } from './PlaylistView';
const PlaylistHeaderView = Backbone.View.extend({
  template(values) {
    const templateText = document.querySelector('#header-playlist').innerText;
    const compiled = _.template(templateText);
    if (values !== null) {
      return compiled(values);
    }
    return compiled();
  },
  render() {
    this.$el.append(this.template(this.model));
    return this;
  },
});

export { PlaylistHeaderView };
