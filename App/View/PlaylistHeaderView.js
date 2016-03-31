var PlaylistHeaderView = Backbone.View.extend({
  events:{
    "click .closeImg": "closeThePlaylist"
  },
  closeThePlaylist:function(){
    this.destroy();
  },
  template: function(values){
    var templateText = document.querySelector("#header-playlist").innerText;
    var compiled = _.template(templateText);
    if (values !== null) {
			return compiled(values);
		}
    return compiled();
  },
  render: function () {
    this.$el.append(this.template(this.model));
    return this;
  }
});
