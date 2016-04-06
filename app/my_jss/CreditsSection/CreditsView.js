const CreditsView = Backbone.View.extend({
  className: 'index-section-2',
  template() {
    const templateText = document.querySelector(`script#${this.className}`).innerText;
    const compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  render() {
    this.$el.html(this.template());
    return this;
  },
});

export { CreditsView };
