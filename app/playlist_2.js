const PlayListModel = Backbone.Model.extend({
});

const PlayListsModels = Backbone.Collection.extend({
  model: PlayListModel
});


 PlaylistItemView = Backbone.View.extend({
  template: function() {
    const fn = _.template($("script#play-list-item").html());
    return fn.apply(this, arguments);
  },
    className: 'play-list-item',
    render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

const PlayListsView = Backbone.View.extend({
  className: 'playlists-view',
  render: function () {
    this.$el.html(this.template);
    const that = this;
    this.collection.forEach(function(model) {
      const item = new PlaylistItemView({
        model: model
      });
      that.$el.append(item.render().el);
    });
  }
});
