const HeaderView = Backbone.View.extend({
  render() {
    const template = _.template($('#template-HeaderView').html(), {});
    this.$el.html(template);
  },
});

export { HeaderView };
