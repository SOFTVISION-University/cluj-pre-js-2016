$(function() {
  var response = [
    {

    },
  ];


  var SongModel = Backbone.Model.extend({

  });


  var Songs = Backbone.Collection.extend({
    model: SongModel
  });


  var newSongs = new Songs();



  var SongView = Backbone.View.extend({
    template: _.template('<div id="song"><%= name %></div>'),
    render: function () {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });

    var SongsView = Backbone.View.extend({
    className: 'songs',

    render: function () {

      this.$el.html(this.template());
      var that = this;
      var partEl = $(this.el.querySelector('#play'));
      this.collection.forEach(function(model) {
                var songView = new SongView({
                  model: model
                });
                that.el.appendChild(songView.render().el);
          });
    }

  })

});


  var pageView = new SongsView({
  el: document.getElementById('play'),
  collection: newSongs
  });

  pageView.render();
  debugger;

});

for (var i = 0; i < playlists[0].songs.length; i++) {
  var songModel= new SongModel(playlists[0].songs[i]);
  newSongs.add(songModel);
}
