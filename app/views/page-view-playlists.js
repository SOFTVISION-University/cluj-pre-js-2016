import { PlaylistsColView } from '../views/playlist-view';
import { HeaderView } from '../views/header-view';

export const PageViewPlaylists = Backbone.View.extend({
  template: $('#template-Playlists-Page').html(),
  _nestedView: [],
  render() {
    this.$el.html(this.template);
    const cards = new PlaylistsColView({
      el: $(this.el.querySelector('#centeredWrapper')),
      collection: this.collection,
    });
    this._nestedView.push(cards.render());

    const headerView = new HeaderView({
      model: this.model,
      el: $(this.el.querySelector('#header')),
    });
    this._nestedView.push(headerView.render());

    return this;
  },
});
