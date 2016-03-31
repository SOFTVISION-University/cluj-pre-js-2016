const HeaderView = Backbone.View.extend({
  render() {
    // Compile the template using underscore
    const template = _.template($('#template-HeaderView').html(), {});
    // Load the compiled HTML into the Backbone "el"
    this.$el.html(template);
  },
});

export { HeaderView };
