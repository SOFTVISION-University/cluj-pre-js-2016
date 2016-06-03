const SignUpTopView = Backbone.View.extend({
  render() {
    const template = _.template($('#template-SignUpTopView').html(), {});
    this.$el.html(template);
  },
});

export { SignUpTopView };
