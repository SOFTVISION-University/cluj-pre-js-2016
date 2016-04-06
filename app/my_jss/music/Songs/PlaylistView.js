import { PlaylistHeaderModel } from './PlaylistHeaderModel.js';
import { PlaylistHeaderView } from './PlaylistHeaderView.js';
import { SongCollection } from './SongCollection.js';
import { SongsTableView } from './SongsTableView.js';

const PlaylistView = Backbone.View.extend({
  className: 'template-playlist',
  template() {
    const templateText = document.querySelector(`script#${this.className}`).innerText;
    const compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  render() {
    const playlistHeaderModel = new PlaylistHeaderModel();
    const playlistHeaderView = new PlaylistHeaderView({
      model: playlistHeaderModel,
    });


    this.$el.html(this.template(this.model.attributes));

    playlistHeaderModel.set({
      imageSmall: this.model.attributes.imageSmall,
      title: this.model.attributes.title,
    });
    playlistHeaderView.render();
    this.$el.append(playlistHeaderView.el);

    const songsC = new SongCollection();
    songsC.set(this.model.attributes.songs);

    const songsTable = new SongsTableView({
      collection: songsC,
    });

    songsTable.render();
    this.$el.append(songsTable.el);

    this.listenTo(playlistHeaderView, 'change:close', () => {
      playlistHeaderView.remove();
      songsTable.remove();
      // debugger;
    });
  },
});

export { PlaylistView };
