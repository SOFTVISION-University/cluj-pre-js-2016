import { PlaylistModelView } from './PlaylistModelView.js';
var PlaylistCollectionView = Backbone.View.extend({
 appendIndividualPlaylist(view){
this.$el.append(view.el);
 },
  render: function () {
      var that = this;
      console.log(this.collection);
      this.collection.forEach(function(model) {
        var playlistModelView = new PlaylistModelView({
          model: model
        });
        playlistModelView.render();
        that.$el.appendIndividualPlaylist(playlistModelView);

      });
    }
});

export{ PlaylistCollectionView };
