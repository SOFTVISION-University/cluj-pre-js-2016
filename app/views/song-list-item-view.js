const SongListItemView = Backbone.View.extend({
  tagName: 'tr',
  className: 'newRow',
  renderTemplate(selectorString, options) {
    const templateText = document.querySelector(selectorString).innerText;
    const compiled = _.template(templateText);
    if (options !== null) {
      return compiled(options);
    }
    return compiled();
  },
  template() {
    return this.renderTemplate('#template-SongRowView', this.model.attributes);
  },
  render() {
    this.$el.html(this.template());
    return this;
  },
});

export { SongListItemView };
