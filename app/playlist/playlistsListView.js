import { playlistTableView } from './playlistTableView.js';
import { BaseView } from '../app/baseView.js';

const PlaylistsListView = BaseView.extend({
  tagName: 'div',
  className: 'music-container',
  template: function template() {
    return this.renderTemplate('#template-playlists-list-view');
  },
  render: function render() {
    const that = this;
    this.$el.html(this.template());
    this.collection.models.forEach(function (model) {
      const view = new playlistTableView({ model: model });
      view.render();
      that.$el.append(view.el);
    });
  },
});

export { PlaylistsListView };
