var PlaylistCollectionView = Backbone.View.extend({
  render: function () {
    var collView = this;
    this.collection.forEach(function(model) {
      var playlistView = new PlaylistView({
        model: model
      });
      collView.el.appendChild(playlistView.render().el);
    });
  }
});
