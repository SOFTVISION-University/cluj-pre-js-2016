// import { SongListItemView } from './SongListItemView.js' ;

const SongListView = Backbone.View.extend({
  className: 'songs',
  render() {
    this.$el.html(this.template);
    const that = this;
    this.collection.forEach(function (model) {
      const songListView = new SongListItemView({
        model: model,
      });
      that.el.appendChild(songListView.render().el);
    });
  },
});

// export { SongListView };
