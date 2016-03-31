import { SongsListView } from '../song/song-list-view.js';

  const PlaylistView = Backbone.View.extend({
    tagName: 'div',
    className: 'playlist-view',
    template() {
      const fn = _.template($("script#playlist-item-view").html());
      return fn.apply(this, arguments);
    },
    events: {
      'click #explore-list-button': 'openListOfSongs',
    },
    render: function () {
      this.$el.html(this.template(this.model.attributes));
      return this;
    },
    openListOfSongs() {
      const songsList = new SongsListView([
        {
          image: '../core/assets/2015-best-music.png',
          songTitle: 'love love enemies love',
          songAuthor: 'Smiley',
          songLength: 74,
          songListened: 82,
        },
        {
          image: '../core/assets/2015-best-music.png',
          songTitle: 'love love enemies pierdut',
          songAuthor: 'Dr. Dre',
          songLength: 186,
          songListened: 78,
        },
      ]);
      const songListDisplay = new SongsListView({
        el: '#container-list-of-songs',
        collection: this.songsList
      });
      songListDisplay.render();
      alert("You clicked");
    }
  });

  export { PlaylistView };
