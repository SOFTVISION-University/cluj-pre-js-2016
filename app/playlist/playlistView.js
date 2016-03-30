var PlaylistView = Backbone.View.extend ({
    events: {
		"click": "onClick"
	},
	onClick : function(){
		Update_song (this.model.attributes.songs);
		PlaylistChangeTitle(this.model.attributes);
	},
	renderTemplate: function (selectorString, options) {
		var templateText = document.querySelector(selectorString).innerText;
		var compiled = _.template(templateText);
		if (options !== null) {
			return compiled(options);
		}
		return compiled();
	},
	template: function (val) {
		return this.renderTemplate('#template-Playlist',val);
	},
	render: function () {
    
		this.$el.html(this.template(this.model.attributes));
		return this;
	}


  });
