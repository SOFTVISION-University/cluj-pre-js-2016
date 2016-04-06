import { SongListItemView } from './SongListItemView.js';

const SongsTableView = Backbone.View.extend({
  className: 'songs-table',
  tagName: 'table',
  template() {
    const templateText = document.querySelector(`script#${this.className}`).innerText;
    const compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  _renderNestedView(view, el) {
    $(el).append(view.el.innerHTML);
  },
  render() {
    this.$el.html(this.template());

    const that = this;
    this.collection.models.forEach(function renderCollection(modelS){
      const songView = new SongListItemView({
        model: modelS,
      });
      
      songView.render();
      that._renderNestedView(songView, that.el.querySelector('tbody'));
    });
    return this;
  },
});

export { SongsTableView };
