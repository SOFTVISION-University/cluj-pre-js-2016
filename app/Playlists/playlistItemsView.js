const PlaylistItemView = Backbone.View.extend({
  className: 'playlist',
  template() {
    const fn = _.template($('script#playlist-view-items').html());
    return fn.apply(this, arguments);
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});

export { PlaylistItemView };
