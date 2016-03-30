var PlaylistView = Backbone.View.extend({
  tagName:'li',
  className:'playlist-view',
  events: {
   'click .explore': 'explorePlaylist'
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
		return this.renderTemplate('#template-PlaylistView', this.model.attributes);
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },

  _setSongsListView: function(view) {
    if(this.songsListView){
      this.songsListView.remove();
    }
    this.songsListView = view;

    if (view != null) {
      this.songsListView.render();
      this.listenTo(this.songsListView, "destroy", this._setSongsListView.bind(this,null));
      this.$el.append(this.songsListView.el);
    }
  },

  explorePlaylist: function() {
    var songsCollection = new SongCollection();
    songsCollection.set(playlistsJSN[0].songs);

    this._setSongsListView(new SongsListView({
      collection: songsCollection
    }));
  }
});
