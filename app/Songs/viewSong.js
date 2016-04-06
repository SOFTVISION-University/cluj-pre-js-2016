const SongListItemView = Backbone.View.extend({
  tagName: 'tr',
  // className: 'song-items',
  template() {
    const fn = _.template($('script#song-view-items').html());
    return fn.apply(this, arguments);
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});


export { SongListItemView };
