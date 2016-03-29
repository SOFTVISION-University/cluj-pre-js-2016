
var SongModel = Backbone.Model.extend({
  defaults:{
    image : undefined,
    songTitle : undefined,
    songAuthor : undefined,
    songLength : undefined,
    songListened : undefined
  },
  
  remove: function () {
  this.trigger('destroy', this);
}
});
