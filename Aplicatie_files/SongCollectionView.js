const SongCollectionView = Backbone.View.extend({
  idName: 'template-allSongs',
  render: function () {
    this.$el.html(this.template);
    var that = this;
    that.collection.forEach(function (model) {
      var songModelView = new SongModelView({
        model: model
      });
      that.el.appendChild(songModelView.render().el);
    });
  }
});
