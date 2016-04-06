const SongListItemView = Backbone.View.extend({
  template: function() {
    const fn = _.template($("script#song-list-view").html());
    return fn.apply(this, arguments);
  },
  className: 'song-list-item-view',
    render: function () {
      this.$el.html(this.template(this.model.attributes));
      return this;
  }
});


// export { SongListItemView };
