const SongListItemView = Backbone.View.extend({
  template() {
    const fn = _.template($('script#song-list-view').html());
    return fn.apply(this, arguments);
  },
  className: 'song-list-item-view',
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});

// export { SongListItemView } ;
