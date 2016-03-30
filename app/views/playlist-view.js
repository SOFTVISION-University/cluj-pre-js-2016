var PlaylistCardView = Backbone.View.extend({
  template: _.template( $("#template-PlaylistView").html() ),
  el: $('#centeredWrapper')[0],
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  events:{
    'click .explorePlaylist' : 'popPlaylist'
  },
  popPlaylist: function(){
    // to be impl.
  }
});

var PlaylistsColView = Backbone.View.extend({
  _nestedView: [],

  renderNestedView: function(view) {
    this._nestedView.push(view);
    this.$el.append(view.el);
  },

  render: function () {
    var that = this;
    this.collection.forEach(function(model) {
        var playlistview = new PlaylistCardView({
          model: model
        });
        playlistview.render();
        that.renderNestedView(playlistview);
    });
    return this;
    }

});
