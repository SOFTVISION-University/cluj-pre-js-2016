var SongModelView = Backbone.View.extend({
  renderTemplate: function (selectorString, options) {
    var templateText = document.querySelector(selectorString).innerText;
    var compiled = _.template(templateText);
    if (options != null) {
      return compiled(options);
      }
    return compiled();
    },

  template: function(data){
    return this.renderTemplate('#template-Song',data);
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
