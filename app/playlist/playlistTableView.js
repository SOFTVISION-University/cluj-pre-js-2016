import { BaseView } from '../app/baseView.js';

const playlistTableView = BaseView.extend({
  tagName: 'div',
  className: 'albums-text',
  events: {
    'click #explore-btn': 'SongsListView',
  },
  initialize: function initialize() {
    this.listenTo(this.collection, 'all', this.render);
  },
  template: function template(values) {
    return this.renderTemplate('#template-playlist-table-view', values);
  },
  render: function render() {
    this.$el.html(this.template(this.model.attributes));
  },
});

export { playlistTableView };
