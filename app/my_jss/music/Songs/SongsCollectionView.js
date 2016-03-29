var SongsCollectionView = Backbone.View.extend({
 _nestedSongs: [],
 _renderNestedView: function(view,el){
    this._nestedSongs.push(view);
    el.append(view.el);
 },
  render : function() {

  var songCollection = this;
  var ElemInTemp = $(this.el.querySelector('.where-to-render-template-Song'));

  this.collection.forEach(function(model) {
      var songView = new SongModelView({model: model});
      songView.render();
      songCollection._renderNestedView(SongView,ElemInTemp);
    //  songCollection.
    });
  }
});
