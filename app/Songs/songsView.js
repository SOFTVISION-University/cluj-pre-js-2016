var SongsView = Backbone.View.extend({

  _nestedView: [],
  renderNestedView: function(view,el) {
    this._nestedView.push(view);
    this.$el.append(view.el);
  },
  render: function () {
    var that = this;
    var partEl = this.el;
  this.collection.forEach(function(model) {
    var songView = new SongView({
    model: model
  });
  songView.render();
  that.renderNestedView(songView,partEl);

  });


  return this;
  }
});
