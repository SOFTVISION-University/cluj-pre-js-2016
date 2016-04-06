const HeaderView = Backbone.View.extend({
  renderTemplate(selectorString, options) {
    const templateText = document.querySelector(selectorString).innerText;

    const compiled = _.template(templateText);
    if (options !== null) {
      return compiled(options);
    }
    return compiled();
  },
  template(val) {
    return this.renderTemplate('#template-HeaderPlaylist', val);
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});
export { HeaderView } ;
