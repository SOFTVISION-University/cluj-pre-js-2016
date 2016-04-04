const LogInView = Backbone.View.extend({
  tagName: 'div',
  className: 'container',
  template() {
    const fn = _.template($('script#log-in-container-view').html());
    return fn.apply(this);
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  },
});

export { LogInView };
