// import { SongListItemView } from './SongListItemView.js' ;

const SongListView = Backbone.View.extend({
  className: 'songs',
  render() {
    const that = this;
    this.$el.html(this.template);
    this.collection.forEach(function (model) {
      const songListView = new SongListItemView({
        model: model,
      });
      that.el.appendChild(songListView.render().el);
    });
  },
});

// export { SongListView };
