
  var PlaylistsView = Backbone.View.extend ({

	_nestedView: [],
	renderNestedView: function(view,el) {
		this._nestedView.push(view);
		this.$el.append(view.el);
	},
	render: function () {
		var that = this;
		var partEl = this.el;
		this.collection.forEach(function(model) {
			var playlistView = new PlaylistView({
				model: model
			});
			playlistView.render();
			that.renderNestedView(playlistView,partEl);

		});


		return this;
	}

  });
