var zongs = [
  {
    title : "aaaaa",
    author : "author",
    imagePath : "imagePath",
    length : "length",
    playCount : 4
  },
  {
    title : "titldde",
    author : "autaahor",
    imagePath : "imasgePath",
    length : "ledngth",
    playCount : 023
  }
];
var songtemplate = document.getElementById('template-SongView').innerText;

var SongView = Backbone.View.extend({
  collection: zongs,
  template: _.template(songtemplate),

  render: function(){
    var that = this;

    this.$el.html(this.template(this.collection.attributes));

    this.collection.models.forEach( function(model){
      var view = new SongView({model: model});
      view.render();
      that.$el.append(view.el);
    });
  }
});
