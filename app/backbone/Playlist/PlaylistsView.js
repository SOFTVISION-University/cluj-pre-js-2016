var PlaylistsView = Backbone.View.extend({
   template: _.template("<p>List of playlists</p><div class='user'></div><ul class='playlists-view'></ul>"),
   _nestedView: [],
   renderNestedView: function(view, el) {
     this._nestedView.push(view);
     el.append(view.el);
   },
   render: function () {
     this.$el.html(this.template());
     var that = this;
     var partEl = $(this.el.querySelector('.playlists-view'));
     this.collection.forEach(function(model) {
         var playlistView = new PlaylistView({
           model: model
         });
         playlistView.render();
         that.renderNestedView(playlistView, partEl);
     });
     debugger;
     return this;
   }
  });
