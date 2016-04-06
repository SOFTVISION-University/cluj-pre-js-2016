const SongListItemView = Backbone.View.extend({
  template: function tpl(...rest) {
    const fn = _.template($('script#song-list-item').html());
    return fn.apply(this, rest);
  },
  className: 'song-list-item',
  render: function render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});


export { SongListItemView };
