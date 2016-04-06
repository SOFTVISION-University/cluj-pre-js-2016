import { PlaylistItemView } from './playlist-item-view.js';
import { PlayListModel } from './playlist-model';

const PlayListsModels = Backbone.Collection.extend({
  model: PlayListModel,
});

const PlayListsView = Backbone.View.extend({
  className: 'playlists-view',
  render: function () {
    this.$el.html(this.template);
    const that = this;
    this.collection.forEach(function(model) {
      const item = new PlaylistItemView({
        model: model
      });
      that.$el.append(item.render().el);
    });
  },
});

export { PlayListsModels };
export { PlayListsView };
