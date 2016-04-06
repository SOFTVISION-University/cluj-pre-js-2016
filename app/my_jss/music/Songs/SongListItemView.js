
const SongListItemView = Backbone.View.extend({
  className: 'song-list-item',
  template() {
    const templateText = document.querySelector(`script#${this.className}`).innerText;
    const compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});

export { SongListItemView };
