const FooterView = Backbone.View.extend({
  render() {
    const template = _.template($('#template-FooterView').html(), {});
    this.$el.html(template);
  },
});

export { FooterView };
