const LogInView = Backbone.View.extend({
  tagName: 'div',
  className: 'container',
  template() {
    const fn = _.template($('script#log-in-container-view').html());
    return fn.apply(this);
  },
  events: {
    'click #log-in-button': 'signUp',
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  signUp(e) {
    const valName = $(this.el).find('input#input-user').val();
    const valPass = $(this.el).find('input#input-password').val();
    this.model.set({ username: valName });
    this.model.set({ password: valPass });
    //alert('user'+ val);
    this.model.logIn();
    e.preventDefault();
  },
});

export { LogInView };
