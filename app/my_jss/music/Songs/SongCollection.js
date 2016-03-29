var SongCollection = Backbone.Collection.extend({
  model : SongModel,
  addNewUser : function(user) {
      this.add(user);
  }
});
