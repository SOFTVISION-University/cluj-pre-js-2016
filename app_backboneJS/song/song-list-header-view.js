const SongListHeaderView = Backbone.View.extend({
  tagName: 'div',
  className: 'song-header-view',
  template() {
    const fn = _.template($('script#song-list-header').html());
    return fn.apply(this, arguments);
  },
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});

export { SongListHeaderView };
