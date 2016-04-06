const PlaylistHeaderView = Backbone.View.extend({
  className: 'playlist-header',
  template() {
    const templateText = document.querySelector(`script#${this.className}`).innerText;
    const compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  events: {
    'click .playlist-top': '_removePlaylist',
  },
  _removePlaylist() {
    this.trigger('change:close');
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
  },
});

export { PlaylistHeaderView };
