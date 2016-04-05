import { BaseView } from '../app/baseView.js';
import { SongsListView } from '../song/SongsListView.js';

const playlistTableView = BaseView.extend({
  tagName: 'div',
  className: 'albums-text',
  events: {
    'click #explore-btn': 'renderSongsList',
  },
  initialize: function () {
    this.listenTo(this.collection, 'all', this.render);
  },
  template: function template(values) {
    return this.renderTemplate('#template-playlist-table-view', values);
  },
  render: function render() {
    this.$el.html(this.template(this.model.attributes));
  },
  renderSongsList: function () {
    const songListView = new SongsListView({
      el: document.getElementsByClassName('container-playlist'),
      collection: playlistsJSON,
    });
    songListView.render();
  },
});

export { playlistTableView };
