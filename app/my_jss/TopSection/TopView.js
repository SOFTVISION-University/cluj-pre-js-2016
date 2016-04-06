const TopView = Backbone.View.extend({
  className: 'index-section-1',
  template() {
    const templateText = document.querySelector(`script#${this.className}`).innerText;
    const compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  events: {
    'click #join-now-button': '_joinNow',
    'click #sign-in-button': '_signIn',
  },
  _joinNow() {
    window.location.href = '#signup';
  },
  _signIn() {
    window.location.href = '#login';
  },
  render() {
    this.$el.html(this.template());

    return this;
  },
});

export { TopView };
