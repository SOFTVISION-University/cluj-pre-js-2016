const ContentView = Backbone.View.extend({
  render() {
    const template = _.template($('#template-ContentView').html(), {});
    this.$el.html(template);
  },
});

export { ContentView };
