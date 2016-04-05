import { songItemView } from '../song/songItemView.js';
import { BaseView } from '../app/baseView.js';

const SongsListView = BaseView.extend({
  tagName: 'div',
  className: 'container-playlist',
  id: 'playlist-container',
  template: function template() {
    return this.renderTemplate('#template-HeaderTableView');
  },
  render: function render() {
    const that = this;
    this.$el.html(this.template());
    this.collection.models.forEach((model) => {
      const view = new songItemView({ model: model });
      view.render();
      that.$el.append(view.el);
    });
  },
});

export { SongsListView };
