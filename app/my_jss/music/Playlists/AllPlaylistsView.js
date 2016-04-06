import { IndividualPlaylistView } from './IndividualPlaylistView';

const AllPlaylistsView = Backbone.View.extend({
  _renderNestedView(view) {
    this.$el.append(view.innerHTML);
  },
  render() {
    let smallViewCountId = 0;
    this.collection.models.forEach((playlistModel) => {
      smallViewCountId++;
      const divPlaylistParent = document.createElement('div');
      divPlaylistParent.setAttribute('id', `playlist-${smallViewCountId}`);
      const playlistViewSmall = new IndividualPlaylistView({
        el: divPlaylistParent,
        model: playlistModel,
      });
      playlistViewSmall.render()
      divPlaylistParent.innerHTML = playlistViewSmall.el.innerHTML;
      this.$el.append(divPlaylistParent);
    });
    return this;
  },
});
export { AllPlaylistsView };
