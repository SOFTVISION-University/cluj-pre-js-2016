import { AllPlaylistsView } from './music/Playlists/AllPlaylistsView.js';
import { CreditsView } from './CreditsSection/CreditsView.js';
import { TopView } from './TopSection/TopView.js';


const FirstPageView = Backbone.View.extend({
  render() {
    const topViewParent = document.createElement('div');
    topViewParent.setAttribute('id', 'top-section');
    (this.$el).append(topViewParent);

    const topView = new TopView({
      el: topViewParent,
    });
    topView.render();

    const sectionForSoloPlaylistViewParent = document.createElement('div');
    sectionForSoloPlaylistViewParent.setAttribute('id', 'playlistAbsolut');
    sectionForSoloPlaylistViewParent.setAttribute('class', 'playlist-absolute');
    (this.$el).append(sectionForSoloPlaylistViewParent);


    const sectionAbsoluteViewParent = document.createElement('div');
    sectionAbsoluteViewParent.setAttribute('class', 'section-absolute');
    (this.$el).append(sectionAbsoluteViewParent);
    const allPlaylistsView = new AllPlaylistsView({
      el: sectionAbsoluteViewParent,
      collection: this.collection,
    });
    allPlaylistsView.render();

    const sectionCreditsViewParent = document.createElement('div');
    sectionCreditsViewParent.setAttribute('id', 'credits-section');
    (this.$el).append(sectionCreditsViewParent);
    const creditsView = new CreditsView({
      el: sectionCreditsViewParent,
    });
    creditsView.render();

    return this;
  },
});
export { FirstPageView };
