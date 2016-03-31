var PlaylistView = Backbone.View.extend({
  events: {
    "click": "onClickExplorePlaylist"
  },
  onClickExplorePlaylist: function(){
    showPlaylist(this.model.attributes);

  },
  className: 'playlistCl',
  template: function(values){
    var templateText = document.querySelector("#playlist-item").innerText;
    var compiled = _.template(templateText);
    if (values !== null) {
			return compiled(values);
		}
    return compiled();
  },
  render: function () {
    this.$el.append(this.template(this.model.attributes));
    return this;
  }
});
