var PlaylistView = Backbone.View.extend({
  className: 'playlist-view',
  template: _.template('<span class="name"><%= name %></span>'),
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
