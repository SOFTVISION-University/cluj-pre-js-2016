const SignUpFootertView = Backbone.View.extend({
  render() {
    const template = _.template($('#template-SignUpFootertView').html(), {});
    this.$el.html(template);
  },
});

export { SignUpFootertView };
