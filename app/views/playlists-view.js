var PlaylistsView = Backbone.View.extend({
  renderTemplate: function (selectorString, options) {
		var templateText = document.querySelector(selectorString).innerText;
		var compiled = _.template(templateText);
		if (options != null) {
			return compiled(options);
		}
		return compiled();
	},
  template:function () {
		return this.renderTemplate('#template-PlaylistsView');
  },
  _nestedView: [],
  renderNestedView: function(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render: function () {
    this.$el.html(this.template());
    var that = this;
    var playlistEl = $(this.el.querySelector('.playlists-view'));
    this.collection.forEach(function(model) {
      var playlistView = new PlaylistView({
        model: model
      });
      playlistView.render();
      that.renderNestedView(playlistView, playlistEl);
    });
  }
});
