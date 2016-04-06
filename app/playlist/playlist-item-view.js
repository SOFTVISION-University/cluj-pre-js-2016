import { SongsCollection } from '../songs/songs-list-item-view.js'
import { SongListItemView } from '../songs/song-list-item-view.js'

const PlaylistItemView = Backbone.View.extend({
  template: function() {
    const fn = _.template($('script#play-list-item').html());
    return fn.apply(this, arguments);
  },
  className: 'play-list-item',
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
  });


export { PlaylistItemView };
