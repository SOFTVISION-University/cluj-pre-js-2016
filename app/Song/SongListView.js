//import { SongListItemView } from './Song/SongListItemView.js';


const SongListView = Backbone.View.extend({
  className: 'songs',
  render: function () {
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

//export { SongListView };
