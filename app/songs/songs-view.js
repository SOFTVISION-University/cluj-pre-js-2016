const SongsListView = Backbone.View.extend({
  className: 'songs',
  render: function () {
    this.$el.html(this.template);
    const that = this;
    this.collection.forEach(function(model) {
      const songView = new SongListItemView({
        model: model
      });
      that.el.appendChild(songView.render().el);
    });
  },
});

export { SongsListView };

// const SongsListView = Backbone.View.extend({
//   className: 'songs',
//   render: function () {
//     this.$el.html(this.template);
//     const that = this;
//     this.collection.forEach(function(model) {
//       const songView = new SongListItemView({
//         model: model
//       });
//       that.el.appendChild(songView.render().el);
//     });
//   },
// });
