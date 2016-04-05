var PlaylistCollectionView = Backbone.View.extend({
  idName: 'template-allPlaylists',
  render: function () {
    this.$el.html(this.template());
      var that = this;
      this.collection.forEach(function(model) {
        var playlistModelView = new PlaylistModelView({
          model: model
        });
        that.$el.append(playlistModelView.render().el);
      });
    }
});
