const LoginView = Backbone.View.extend({
  className: 'log-form',
  template() {
    const fn = _.template($('script#login-view-items').html());
    return fn.apply(this, arguments);
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});

export {LoginView };
