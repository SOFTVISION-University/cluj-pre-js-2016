const SignUpContentView = Backbone.View.extend({
  events: {
    'click .sign_up': 'goTop',
  },
  render() {
    const template = _.template($('#template-SignUpContentView').html(), {});
    this.$el.html(template);
  },
  goTop() {
    document.body.scrollTop = 0;
    document.getElementById('your_name').focus();
  },
});

export { SignUpContentView };
