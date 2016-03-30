var SongsListView = Backbone.View.extend({
  className: "playlist-expand",
  events: {
   'click .close-button': 'closePlaylist'
  },
  initialize: function() {
   this.listenTo(this.model, "change", this.render);
  },
  renderTemplate: function (selectorString, options) {
		var templateText = document.querySelector(selectorString).innerText;
		var compiled = _.template(templateText);
		if (options != null) {
			return compiled(options);
		}
		return compiled();
	},
  template:function () {
		return this.renderTemplate('#template-SongsListView');
  },
  _nestedView: [],
  renderNestedView: function(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render: function () {
    this.$el.html(this.template());
    var that = this;
    var songEl = $(this.el.querySelector('#playlist-songs-body'));
    this.collection.forEach(function(model) {
      var songListItemView = new SongListItemView({
        model: model
      });
      songListItemView.render();
      that.renderNestedView(songListItemView, songEl);
    });
  },

  closePlaylist: function() {
    this.trigger('destroy');
  }
});
