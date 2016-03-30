var SongListView = Backbone.View.extend({
    className: 'songs',
    render: function () {
    this.$el.html(this.template);
    var that = this;
    this.collection.forEach(function(model) {
      var songListView = new SongListItemView({
        model: model
      });
      that.el.appendChild(songListView.render().el);
    });
  }
});
