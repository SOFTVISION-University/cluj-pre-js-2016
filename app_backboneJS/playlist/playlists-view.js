var PlaylistsView = Backbone.View.extend({
        template: _.template("<div class='wrapper-image'></div>"),
        _nestedView: [],
        renderNestedView: function(view, el) {
            this._nestedView.push(view);
            el.append(view.el);
          },
        render: function () {
            this.$el.html(this.template());
            var that = this;
            var partEl = $(this.el.querySelector('.wrapper-image'));
            this.collection.forEach(function(model) {
                  var playlistView = new PlaylistView({
                        model: model
                  });
            playlistView.render();
            that.renderNestedView(playlistView, partEl);
          });
        return this;
        }
});
