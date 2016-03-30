var SongsListView = Backbone.View.extend({
    template: _.template("<div class='song-list-view'></div>"),
    _nestedView: [],
    renderNestedView: function(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render: function () {
    this.$el.html(this.template());
    var that = this;
    var partEl = $(this.el.querySelector('.song-list-view'));
    this.collection.forEach(function(model) {
      var songItemView = new SongListItemView({
        model: model
      });
      songItemView.render();
      that.renderNestedView(songItemView, partEl);
  });

  return this;
  }
});
