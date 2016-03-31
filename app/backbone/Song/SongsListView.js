import { SongListItemView } from './SongListItemView.js' ;

const SongsListView = Backbone.View.extend({
  className: 'songs',
  render() {
    this.$el.html(this.template);
    const that = this;
    this.collection.forEach(function (modelS) {
      const songListView = new SongListItemView({
        model: modelS,
      });
      that.el.appendChild(songListView.render().el);
    });
  },
});
export { SongsListView };
