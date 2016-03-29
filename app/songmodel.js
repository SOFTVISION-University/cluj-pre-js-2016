
$(function() {

var Songs = Backbone.Model.extend({
   defaults:{
      image : "",
      songTitle : "aaaa",
      songAuthor : "AAAAAAAAA",
      songLength : "334",
      songListened:"12",

  }
});

var Song = Backbone.Model.extend({
});

var SongList = Backbone.Collection.extend({
  model: Song
});

 var songs = new SongList([
   new Songs({ songTitle: 'bbbbbb', songListened: 200}),
   new Songs({ songTitle: 'ccccccc', songListened: 270})
]);

var SongsView = Backbone.View.extend({
  template: _.template('<span class="name"><%= name %></span>'),
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

});
