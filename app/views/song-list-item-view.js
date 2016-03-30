var SongListItemView = Backbone.View.extend({
  tagName:'tr',
  className:'newRow',
  renderTemplate: function (selectorString, options) {
		var templateText = document.querySelector(selectorString).innerText;
		var compiled = _.template(templateText);
		if (options != null) {
			return compiled(options);
		}
		return compiled();
	},
  template:function () {
		return this.renderTemplate('#template-SongRowView', this.model.attributes);
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
