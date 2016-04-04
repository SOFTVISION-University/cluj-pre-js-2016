const PlaylistItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'playlist-view',
  template: _.template('<span class="name"><%= name %></span>'),
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});

//export { PlaylistItemView };
